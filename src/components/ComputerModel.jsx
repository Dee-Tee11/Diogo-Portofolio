import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

// Path to GLTF in public folder
const modelPath = "/assets/3d/dream_computer_setup/scene.gltf";

export default function ComputerModel({ scrollContainerRef, isMobile = false }) {
    const group = useRef();
    const { scene, animations } = useGLTF(modelPath);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        // Enable shadows only on desktop for performance
        if (!isMobile) {
            scene.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }

        // Loop animation (Continuous parts movement)
        if (actions) {
            const names = Object.keys(actions);
            if (names.length > 0) {
                const action = actions[names[0]];
                action.reset().fadeIn(0.5).play();
                // Slower animation on mobile to reduce frame drops
                action.timeScale = isMobile ? 0.3 : 0.5;
            }
        }
    }, [scene, actions, isMobile]);

    useFrame((state, delta) => {
        if (!scrollContainerRef.current || !group.current) return;

        const el = scrollContainerRef.current;
        const maxScroll = el.scrollHeight - el.clientHeight;
        const progress = maxScroll > 0 ? el.scrollTop / maxScroll : 0;

        // --- DYNAMIC PARALLAX KEYFRAMES ---

        // Define Keypoints
        const startState = { pos: new THREE.Vector3(4, 0.5, -2), rot: new THREE.Vector3(1, -1, 1) }; // Start: Right side
        const midState = { pos: new THREE.Vector3(-4, 0, 2), rot: new THREE.Vector3(0.5, 0.8, -0.2) }; // Mid: Left side (Cross screen)
        const endState = { pos: new THREE.Vector3(2, 0, 4), rot: new THREE.Vector3(0, 0, 0) };      // End: Center Zoom

        const targetPos = new THREE.Vector3();
        const targetRot = new THREE.Vector3();

        if (progress < 0.5) {
            // 0% -> 50% (Right -> Left + Zoom In)
            const p = progress * 2; // Normalize 0-1
            targetPos.lerpVectors(startState.pos, midState.pos, p);

            // Manual Lerp for Rotation components to avoid Quaternion complexity for now
            targetRot.x = THREE.MathUtils.lerp(startState.rot.x, midState.rot.x, p);
            targetRot.y = THREE.MathUtils.lerp(startState.rot.y, midState.rot.y, p);
            targetRot.z = THREE.MathUtils.lerp(startState.rot.z, midState.rot.z, p);

        } else {
            // 50% -> 100% (Left -> Center + Zoom MACRO)
            const p = (progress - 0.5) * 2; // Normalize 0-1
            targetPos.lerpVectors(midState.pos, endState.pos, p);

            targetRot.x = THREE.MathUtils.lerp(midState.rot.x, endState.rot.x, p);
            targetRot.y = THREE.MathUtils.lerp(midState.rot.y, endState.rot.y, p);
            targetRot.z = THREE.MathUtils.lerp(midState.rot.z, endState.rot.z, p);
        }

        // Apply Smoothing (Damping) - Higher damping on mobile for better performance
        const damp = isMobile ? 6 * delta : 4 * delta;
        group.current.position.lerp(targetPos, damp);

        // Smooth Rotation
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRot.x, damp);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRot.y, damp);
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRot.z, damp);
    });

    return (
        <group ref={group} position={[4, 1, 0]} rotation={[0.2, -0.5, 0]}>
            <primitive
                object={scene}
                scale={0.1}
            />
        </group>
    );
}

useGLTF.preload(modelPath);
