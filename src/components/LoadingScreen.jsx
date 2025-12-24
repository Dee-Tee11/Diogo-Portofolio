import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ started, onStarted }) => {
    const [progress, setProgress] = useState(0);

    // Simulate progress for visual feedback (since useProgress in App handles the real trigger)
    // or we can pass real progress if complex. For now, let's keep it simple and internal
    // or just purely visual "indefinite" loading if we don't pass real progress.
    // actually, let's just make a cool indeterminate loader.

    return (
        <AnimatePresence>
            {!started && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: 'var(--color-bg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                        fontFamily: '"Press Start 2P", monospace',
                    }}
                >
                    {/* Glitchy Text Effect */}
                    <motion.h1
                        animate={{
                            opacity: [1, 0.8, 1, 0.5, 1],
                            x: [0, 2, -2, 0],
                            textShadow: [
                                "2px 0 #ff00ff, -2px 0 #00ffff",
                                "-2px 0 #ff00ff, 2px 0 #00ffff",
                                "2px 0 #ff00ff, -2px 0 #00ffff"
                            ]
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "linear"
                        }}
                        style={{
                            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
                            marginBottom: '40px',
                            letterSpacing: '0.15em',
                            textAlign: 'center',
                            width: '100%',
                            padding: '0 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        INITIALIZING...
                    </motion.h1>

                    {/* Cyberpunk Loading Bar */}
                    <div style={{
                        width: '300px',
                        height: '4px',
                        background: '#333',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 0 10px var(--color-primary)'
                    }}>
                        <motion.div
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: '50%',
                                height: '100%',
                                background: 'var(--color-primary)',
                                boxShadow: '0 0 20px var(--color-primary)'
                            }}
                        />
                    </div>

                    <p style={{
                        marginTop: '20px',
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontFamily: '"Rajdhani", sans-serif'
                    }}>
                        LOADING ASSETS // PLEASE WAIT
                    </p>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
