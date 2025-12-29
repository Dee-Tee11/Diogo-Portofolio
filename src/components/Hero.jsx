import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import DecryptText from './DecryptText';
import ComputerModel from './ComputerModel';

const Hero = () => {
    const [lang, setLang] = useState('en');
    const scrollContainerRef = useRef(null);

    // EXISTING ANIMATION LOGIC
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const onMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = (e.clientY / innerHeight) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
    };

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);
    const rotateX = useTransform(smoothY, [-1, 1], [55, 65]);

    // TRANSLATIONS
    const translations = {
        en: {
            portfolio: "PORTFOLIO",
            role1: "AI ENGINEER",
            role2: "FULL STACK DEVELOPER",
            sections: {
                profile: "PROFILE",
                experience: "PROFESSIONAL EXPERIENCE",
                projects: "FEATURED PROJECTS",
                skills: "SKILLS & TECH"
            },
            profileText: "Computer Engineer specializing in AI and Full Stack development. Experienced in delivering full-stack automation projects and integrating cutting-edge Generative AI into enterprise solutions. Dedicated to engineering excellence and continuous innovation.",
            experience: {
                soluis: {
                    role: "AI, Automation & Full Stack Engineer",
                    desc1: "► Participation in various Full Stack automation projects.",
                    desc2: "► Integration of Artificial Intelligence solutions into enterprise systems.",
                    desc3: "► Worked with scalable serverless solutions using Cloud Storage and Edge Functions.",

                },
                internship: {
                    title: "Curricular Internship in Samsys",
                    role: "Full Stack Developer",
                    desc1: "► Backend and Frontend development (React TypeScript & .NET).",
                    desc2: "► Created a plugin implemented in the company's main application.",
                    desc3: "► Agile Methodology (Scrum), Azure DevOps, and Git."
                },
                holland: {
                    title: "International Project in Fontys University Netherlands",
                    desc1: "► Intensive project on \"Transformation from linear to circular economy\".",
                    desc2: "► Applied strategies for sustainability and profit in an electric bike company.",
                    desc3: "► Technologies: Java."
                },
                summer: {
                    title: "Summer Internship at VisitPlann",
                    role: "Back-End Developer",
                    desc1: "► Mobile application for monument recognition via location and IA.",
                    desc2: "► Technologies: Android Studio, Java."
                }
            },
            projects: {
                atlasAI: {
                    desc: "AI Secretary with advanced conversational capabilities. Fine-tuned language model using Reinforcement Learning for optimal performance.",
                    highlights: [
                        "► Applied Reinforcement Learning techniques for model fine-tuning.",
                        "► Developed and trained on Google Colab and Kaggle platforms.",
                        "► Experimented with various RL strategies using Jupyter Notebooks."
                    ],
                    stack: "PYTHON • REINFORCEMENT LEARNING • JUPYTER • GOOGLE COLAB • KAGGLE",
                    status: "WORKING NOW"
                },
                movieNight: {
                    desc: "Intelligent Movie Discovery Powered by RAG & Vector Search. Understands unique taste profiles using embeddings to provide hyper-personalized suggestions.",
                    highlights: [
                        "► RAG-Powered Recommendations with Multi-Vector Consensus Strategy.",
                        "► AI Curator using Llama 3.1 for personalized, explainable suggestions.",
                        "► Premium UX/UI: Glassmorphism with React 19, GSAP & Framer Motion."
                    ],
                    stack: "REACT 19 • TYPESCRIPT • FASTAPI • SUPABASE • LLAMA 3.1 • RAG • GEN AI • ML",
                    cta: "VIEW PROJECT ►"
                },
                portfolio: {
                    desc: "This interactive 3D portfolio. An immersive experience built with React Three Fiber to showcase skills and projects.",
                    highlights: [
                        "► Implemented a responsive 3D scene with interactive elements.",
                        "► Optimized performance and animations for smooth user experience."
                    ],
                    stack: "REACT • THREE.JS • FRAMER MOTION • VITE",
                    cta: "VIEW REPO ►"
                }
            },
            skills: {
                tech: "Tech Stack",
                soft: "Soft Skills",
                softList: [
                    "Agile Methodology & Scrum",
                    "Critical Thinking & Problem Solving",
                    "Teamwork & Autonomy",
                    "Fast Learning",
                    "Effective Communication",
                    "Adaptability & Flexibility",
                    "Time Management",
                    "Responsible"
                ],
                languages: "Languages",
                languageList: [
                    "Portuguese (Native)",
                    "English (Fluent / C1)"
                ]
            },
            footer: {
                contact: ":: CONTACT DATA ::"
            }
        },
        pt: {
            portfolio: "PORTFÓLIO",
            role1: "ENGENHEIRO DE IA",
            role2: "DESENVOLVEDOR FULL STACK",
            sections: {
                profile: "PERFIL",
                experience: "EXPERIÊNCIA PROFISSIONAL",
                projects: "PROJETOS EM DESTAQUE",
                skills: "COMPETÊNCIAS E TECNOLOGIAS"
            },
            profileText: "Engenheiro Informático especializado em IA e desenvolvimento Full Stack. Experiente na entrega de projetos de automação full-stack e na integração de IA Generativa de vanguarda em soluções empresariais. Dedicado à excelência na engenharia e à inovação contínua.",
            experience: {
                soluis: {
                    role: "Engenheiro de IA, Automação & Full Stack",
                    desc1: "► Participação em vários projetos de automação Full Stack.",
                    desc2: "► Integração de soluções de Inteligência Artificial em sistemas empresariais.",
                    desc3: "► Trabalhei com soluções serverless escaláveis usando Cloud Storage e Edge Functions.",
                },
                internship: {
                    title: "Estágio Curricular na Samsys",
                    role: "Desenvolvedor Full Stack",
                    desc1: "► Desenvolvimento Backend e Frontend (React TypeScript e .NET).",
                    desc2: "► Criação de um plugin implementado na aplicação principal da empresa.",
                    desc3: "► Metodologia Ágil (Scrum), Azure DevOps e Git."
                },
                holland: {
                    title: "Projeto Internacional (Países Baixos)",
                    desc1: "► Projeto intensivo sobre \"Transformação da economia linear para circular\".",
                    desc2: "► Aplicação de estratégias de sustentabilidade e lucro numa empresa de bicicletas elétricas.",
                    desc3: "► Tecnologias: Java."
                },
                summer: {
                    title: "Estágio de Verão",
                    role: "Desenvolvedor Back-End",
                    desc1: "► Aplicação móvel para reconhecimento de monumentos via localização e IA.",
                    desc2: "► Tecnologias: Android Studio, Java."
                }
            },
            projects: {
                atlasAI: {
                    desc: "Secretário IA com capacidades conversacionais avançadas. Modelo de linguagem ajustado usando Reinforcement Learning para melhor desempenho.",
                    highlights: [
                        "► Aplicação de técnicas de Reinforcement Learning para fine-tuning do modelo.",
                        "► Desenvolvimento e treino em plataformas Google Colab e Kaggle.",
                        "► Experimentação com várias estratégias de RL usando Jupyter Notebooks."
                    ],
                    stack: "PYTHON • REINFORCEMENT LEARNING • JUPYTER • GOOGLE COLAB • KAGGLE",
                    status: "A Desenvolver"
                },
                movieNight: {
                    desc: "Descoberta Inteligente de Filmes com RAG e Pesquisa Vetorial. Entende perfis de gosto únicos usando embeddings para sugestões hiper-personalizadas.",
                    highlights: [
                        "► Recomendações RAG com Estratégia de Consenso Multi-Vetorial.",
                        "► Curador IA usando Llama 3.1 para sugestões personalizadas e explicáveis.",
                        "► UX/UI Premium: Glassmorphism com React 19, GSAP e Framer Motion."
                    ],
                    stack: "REACT 19 • TYPESCRIPT • FASTAPI • SUPABASE • LLAMA 3.1 • RAG • GEN AI • ML",
                    cta: "VER PROJETO ►"
                },
                portfolio: {
                    desc: "Este portfólio 3D interativo. Uma experiência imersiva construída com React Three Fiber para demonstrar competências e projetos.",
                    highlights: [
                        "► Implementação de uma cena 3D responsiva com elementos interativos.",
                        "► Otimização de performance e animações para uma experiência fluida."
                    ],
                    stack: "REACT • THREE.JS • FRAMER MOTION • VITE",
                    cta: "VER REPO ►"
                }
            },
            skills: {
                tech: "Tech Stack",
                soft: "Soft Skills",
                softList: [
                    "Metodologia Ágil e Scrum",
                    "Pensamento Crítico e Resolução de Problemas",
                    "Trabalho em Equipa e Autonomia",
                    "Aprendizagem Rápida",
                    "Comunicação Eficaz",
                    "Adaptabilidade e Flexibilidade",
                    "Gestão de Tempo",
                    "Responsável"
                ],
                languages: "Idiomas",
                languageList: [
                    "Português (Nativo)",
                    "Inglês (Fluente / C1)"
                ]
            },
            footer: {
                contact: ":: DADOS DE CONTACTO ::"
            }
        }
    };

    const t = translations[lang];

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-bg)',
                perspective: '500px'
            }}
        >

            {/* 3D Scene Layer */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                    <ambientLight intensity={0.8} />
                    <hemisphereLight intensity={0.5} groundColor="#080820" />
                    <directionalLight position={[5, 10, 5]} intensity={1.5} />
                    <pointLight position={[0, 5, 0]} intensity={2} />
                    <Environment preset="city" />
                    <Suspense fallback={null}>
                        <ComputerModel scrollContainerRef={scrollContainerRef} />
                    </Suspense>
                </Canvas>
            </div>
            {/* Language Toggle */}
            <button
                onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1000,
                    background: 'rgba(5, 0, 5, 0.8)',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontFamily: '"Press Start 2P", cursive',
                    fontSize: '0.8rem',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 0 10px rgba(209, 0, 209, 0.3)'
                }}
            >
                {lang === 'en' ? 'PT' : 'EN'}
            </button>
            {/* 3D Perspective Grid Container */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
            >
                {/* Moving Grid Pattern */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0px 0px", "0px 80px"]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        backgroundSize: '100px 100px',
                        /* Solid lines that will be "textured" by the overlay */
                        backgroundImage: `
              linear-gradient(to right, rgba(209, 0, 209, 0.6) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(209, 0, 209, 0.6) 2px, transparent 2px)
            `,
                        backgroundRepeat: 'repeat',
                    }}
                />

                {/* Grid Scanline Texture (Creates the pixelated/broken line effect) */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, var(--color-bg) 2px, var(--color-bg) 4px)',
                    pointerEvents: 'none',
                    opacity: 0.8 /* Aggressive scanlines to break the lines */
                }} />

                {/* Fade Out Overlay (Horizon) */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '20%',
                    background: 'linear-gradient(to bottom, var(--color-bg) 0%, transparent 100%)',
                    zIndex: 1
                }} />

                {/* Fade Out Overlay (Bottom Vignette) */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '30%',
                    background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
                    zIndex: 1
                }} />
            </motion.div>


            {/* Content Overlay (Scrollable) */}
            <div
                ref={scrollContainerRef}
                style={{
                    zIndex: 10,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflowY: 'auto',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none', /* IE/Edge */
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '100px',
                    paddingBottom: '100px'
                }}
                className="no-scrollbar" /* Utility class for hiding scrollbar if needed */
            >
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
                    <h3 className="jp-text" style={{ fontSize: '1.2rem', letterSpacing: '0.4em', marginBottom: '20px', color: 'var(--color-primary)' }}>
                        {t.portfolio}
                    </h3>
                    <motion.h1
                        style={{
                            fontFamily: '"Press Start 2P", cursive',
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            letterSpacing: '0.1em',
                            color: 'transparent',
                            marginBottom: '20px',
                            lineHeight: '1.5',
                            backgroundImage: 'linear-gradient(to bottom, var(--color-primary) 50%, #ea00ea 50%)',
                            backgroundSize: '100% 4px',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 5px rgba(209,0,209,0.5))'
                        }}
                        animate={{
                            filter: [
                                'drop-shadow(0 0 5px rgba(209,0,209,0.5))',
                                'drop-shadow(0 0 20px rgba(209,0,209,0.8))',
                                'drop-shadow(0 0 5px rgba(209,0,209,0.5))'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        DIOGO TEIXEIRA
                    </motion.h1>
                    <p style={{ fontFamily: '"Press Start 2P", monospace', color: 'var(--color-primary)', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', letterSpacing: '0.2em', lineHeight: '1.8' }}>
                        {t.role1}<br />
                        {t.role2}
                    </p>
                </div>

                {/* Main Content Container */}
                <div style={{
                    width: '100%',
                    maxWidth: '900px',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '60px'
                }}>

                    {/* PROFILE */}
                    <section>
                        <h2 style={{ fontFamily: '"Press Start 2P", cursive', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px', textShadow: '2px 2px 4px #000' }}>
                            <DecryptText text={t.sections.profile} speed={20} />
                        </h2>
                        <p style={{
                            color: '#e0e0e0',
                            fontFamily: '"Rajdhani", sans-serif',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                            textShadow: '1px 1px 3px #000'
                        }}>
                            {t.profileText}
                        </p>
                    </section>

                    {/* PROFESSIONAL EXPERIENCE */}
                    <section>
                        <h2 style={{ fontFamily: '"Press Start 2P", cursive', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                            <DecryptText text={t.sections.experience} speed={15} />
                        </h2>

                        {/* Soluis (Updated) */}
                        <div style={{
                            marginBottom: '40px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: '1.4rem', color: '#fff', textShadow: '2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.8)' }}>Soluis</h3>
                                <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', textShadow: '2px 2px 2px #000' }}>JAN 2025 - PRESENT</span>
                            </div>
                            <h4 style={{ color: '#fff', marginBottom: '15px', textShadow: '2px 2px 4px #000', fontWeight: 'bold' }}>{t.experience.soluis.role}</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', textShadow: '1px 1px 3px #000' }}>
                                <li style={{ marginBottom: '10px' }}>{t.experience.soluis.desc1}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.soluis.desc2}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.soluis.desc3}</li>
                                <li style={{ marginBottom: '10px', color: 'var(--color-primary)', fontSize: '0.9rem', textShadow: '1px 1px 2px #000', fontWeight: 'bold' }}>
                                    Stack: React, TypeScript, Python, Three.js, MySQL, Azure DevOps, C#
                                </li>
                            </ul>
                        </div>

                        {/* Curricular Internship */}
                        <div style={{
                            marginBottom: '40px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: '1.4rem', color: '#fff', textShadow: '2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.8)' }}>{t.experience.internship.title}</h3>
                                <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', textShadow: '2px 2px 2px #000' }}>SEP 2024 - DEC 2024</span>
                            </div>
                            <h4 style={{ color: '#fff', marginBottom: '15px', textShadow: '2px 2px 4px #000', fontWeight: 'bold' }}>{t.experience.internship.role}</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', textShadow: '1px 1px 3px #000' }}>
                                <li style={{ marginBottom: '10px' }}>{t.experience.internship.desc1}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.internship.desc2}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.internship.desc3}</li>
                            </ul>
                        </div>

                        {/* International Project Holland */}
                        <div style={{
                            marginBottom: '40px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: '1.4rem', color: '#fff', textShadow: '2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.8)' }}>{t.experience.holland.title}</h3>
                                <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', textShadow: '2px 2px 2px #000' }}>APR 2024</span>
                            </div>
                            <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', textShadow: '1px 1px 3px #000' }}>
                                <li style={{ marginBottom: '10px' }}>{t.experience.holland.desc1}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.holland.desc2}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.holland.desc3}</li>
                            </ul>
                        </div>

                        {/* Summer Internship */}
                        <div style={{
                            marginBottom: '40px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: '1.4rem', color: '#fff', textShadow: '2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.8)' }}>{t.experience.summer.title}</h3>
                                <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', textShadow: '2px 2px 2px #000' }}>JUL 2022 - AUG 2022</span>
                            </div>
                            <h4 style={{ color: '#fff', marginBottom: '15px', textShadow: '2px 2px 4px #000', fontWeight: 'bold' }}>{t.experience.summer.role}</h4>
                            <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', textShadow: '1px 1px 3px #000' }}>
                                <li style={{ marginBottom: '10px' }}>{t.experience.summer.desc1}</li>
                                <li style={{ marginBottom: '10px' }}>{t.experience.summer.desc2}</li>
                            </ul>
                        </div>
                    </section>


                    {/* FEATURED PROJECTS */}
                    <section>
                        <h2 style={{ fontFamily: '"Press Start 2P", cursive', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                            <DecryptText text={t.sections.projects} speed={20} />
                        </h2>

                        {/* Atlas AI Project - WORKING NOW */}
                        <motion.div
                            style={{
                                background: 'rgba(5, 5, 10, 0.6)',
                                backdropFilter: 'blur(5px)',
                                border: '2px solid var(--color-primary)',
                                padding: '25px',
                                position: 'relative',
                                overflow: 'hidden',
                                marginBottom: '40px'
                            }}
                            animate={{
                                boxShadow: [
                                    '0 0 10px rgba(209, 0, 209, 0.4)',
                                    '0 0 30px rgba(209, 0, 209, 0.8)',
                                    '0 0 10px rgba(209, 0, 209, 0.4)'
                                ],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 50px rgba(209, 0, 209, 1)',
                                borderColor: '#fff',
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut",
                                    repeat: 0
                                }
                            }}
                        >
                            {/* Status Badge - WORKING NOW */}
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'rgba(209, 0, 209, 0.2)',
                                border: '1px solid var(--color-primary)',
                                color: '#fff',
                                padding: '5px 12px',
                                fontSize: '0.6rem',
                                fontFamily: '"Press Start 2P", cursive',
                                boxShadow: '0 0 10px rgba(209, 0, 209, 0.5)'
                            }}>
                                {t.projects.atlasAI.status}
                            </div>

                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-primary)' }} />
                            <h3 style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1.2rem', color: '#fff', marginBottom: '15px', textShadow: '3px 3px 0px #000, 0 0 10px rgba(0,0,0,0.8)' }}>
                                ATLAS AI
                            </h3>
                            <p style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', marginBottom: '15px', textShadow: '1px 1px 2px #000' }}>
                                {t.projects.atlasAI.desc}
                            </p>
                            {t.projects.atlasAI.highlights && (
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                                    {t.projects.atlasAI.highlights.map((highlight, index) => (
                                        <li key={index} style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem', marginBottom: '5px', textShadow: '1px 1px 2px #000' }}>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p style={{ color: 'var(--color-primary)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.75rem', lineHeight: '1.6', textShadow: '2px 2px 0px #000', fontWeight: 'bold' }}>
                                {t.projects.atlasAI.stack}
                            </p>
                        </motion.div>

                        {/* Movie Night AI */}
                        <a href="https://movienightai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <motion.div
                                style={{
                                    background: 'rgba(5, 5, 10, 0.6)', // More transparent to see model
                                    backdropFilter: 'blur(5px)',
                                    border: '1px solid var(--color-primary)',
                                    padding: '25px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                animate={{
                                    boxShadow: [
                                        '0 0 5px rgba(209, 0, 209, 0.2)',
                                        '0 0 20px rgba(209, 0, 209, 0.6)',
                                        '0 0 5px rgba(209, 0, 209, 0.2)'
                                    ],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 40px rgba(209, 0, 209, 0.8)',
                                    borderColor: '#fff',
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        repeat: 0
                                    }
                                }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-primary)' }} />
                                <h3 style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1.2rem', color: '#fff', marginBottom: '15px', textShadow: '3px 3px 0px #000, 0 0 10px rgba(0,0,0,0.8)' }}>
                                    MOVIE NIGHT AI
                                </h3>
                                <p style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', marginBottom: '15px', textShadow: '1px 1px 2px #000' }}>
                                    {t.projects.movieNight.desc}
                                </p>
                                {t.projects.movieNight.highlights && (
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                                        {t.projects.movieNight.highlights.map((highlight, index) => (
                                            <li key={index} style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem', marginBottom: '5px', textShadow: '1px 1px 2px #000' }}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <p style={{ color: 'var(--color-primary)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.75rem', lineHeight: '1.6', textShadow: '2px 2px 0px #000', fontWeight: 'bold' }}>
                                    {t.projects.movieNight.stack}
                                </p>
                                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <span style={{ color: '#fff', fontSize: '0.8rem', fontFamily: '"Orbitron", sans-serif' }}>{t.projects.movieNight.cta}</span>
                                </div>
                            </motion.div>
                        </a>

                        {/* Portfolio Project */}
                        <a href="https://github.com/Dee-Tee11/Diogo-Portofolio" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: '40px', display: 'block' }}>
                            <motion.div
                                style={{
                                    background: 'rgba(5, 5, 10, 0.6)',
                                    backdropFilter: 'blur(5px)',
                                    border: '1px solid var(--color-primary)',
                                    padding: '25px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                animate={{
                                    boxShadow: [
                                        '0 0 5px rgba(209, 0, 209, 0.2)',
                                        '0 0 20px rgba(209, 0, 209, 0.6)',
                                        '0 0 5px rgba(209, 0, 209, 0.2)'
                                    ],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 40px rgba(209, 0, 209, 0.8)',
                                    borderColor: '#fff',
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        repeat: 0
                                    }
                                }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-primary)' }} />
                                <h3 style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1.2rem', color: '#fff', marginBottom: '15px', textShadow: '3px 3px 0px #000, 0 0 10px rgba(0,0,0,0.8)' }}>
                                    PORTFOLIO 3D
                                </h3>
                                <p style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', marginBottom: '15px', textShadow: '1px 1px 2px #000' }}>
                                    {t.projects.portfolio.desc}
                                </p>
                                {t.projects.portfolio.highlights && (
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                                        {t.projects.portfolio.highlights.map((highlight, index) => (
                                            <li key={index} style={{ color: '#e0e0e0', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem', marginBottom: '5px', textShadow: '1px 1px 2px #000' }}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <p style={{ color: 'var(--color-primary)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.75rem', lineHeight: '1.6', textShadow: '2px 2px 0px #000', fontWeight: 'bold' }}>
                                    {t.projects.portfolio.stack}
                                </p>
                                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <span style={{ color: '#fff', fontSize: '0.8rem', fontFamily: '"Orbitron", sans-serif' }}>{t.projects.portfolio.cta}</span>
                                </div>
                            </motion.div>
                        </a>
                    </section>

                    {/* SKILLS & TECNOLOGIAS */}
                    <section>
                        <h2 style={{ fontFamily: '"Press Start 2P", cursive', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                            <DecryptText text={t.sections.skills} speed={20} />
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div>
                                <h3 style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', marginBottom: '15px' }}>{t.skills.tech}</h3>
                                <ul style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
                                    <li>React / TypeScript / Next.js</li>
                                    <li>Python / Fast API</li>
                                    <li>Gen AI / RAG / Machine Learning</li>
                                    <li>Three.js / WebGL</li>
                                    <li>C# / .NET / Entity Framework</li>
                                    <li>SQL / MySQL / Vector DBs</li>
                                    <li>Azure DevOps / Git</li>
                                    <li>Cloud / Storage / Edge Functions / Pipelines</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', marginBottom: '15px' }}>{t.skills.soft}</h3>
                                <ul style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
                                    {t.skills.softList.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', marginBottom: '15px' }}>{t.skills.languages}</h3>
                                <ul style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
                                    {t.skills.languageList.map((lang, index) => (
                                        <li key={index}>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer style={{
                        marginTop: '80px',
                        paddingTop: '30px',
                        borderTop: '1px solid rgba(209, 0, 209, 0.3)',
                        paddingBottom: '40px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <div style={{ color: '#fff', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem' }}>
                            +351 931 069 434
                        </div>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <div style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem' }}>
                            diogoluisteixeira@gmail.com
                        </div>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href="https://www.linkedin.com/in/diogo-teixeira-9b108423b/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>LINKEDIN</span>
                        </a>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href="https://github.com/Dee-Tee11" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>GITHUB</span>
                        </a>
                    </footer>
                </div>
            </div>

            {/* CRT Vignette Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 50%, rgba(5,0,5,0.8) 100%)',
                    zIndex: 100,
                    pointerEvents: 'none'
                }}
            />
        </div >
    );
};

export default Hero;
