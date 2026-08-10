import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import DecryptText from './DecryptText';
import ComputerModel from './ComputerModel';
import { useIsMobile } from '../hooks/useIsMobile';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import SkillsSection from './SkillsSection';

const Hero = () => {
    const [lang, setLang] = useState('en');
    const scrollContainerRef = useRef(null);
    const isMobile = useIsMobile();

    // EXISTING ANIMATION LOGIC
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const onMouseMove = (e) => {
        if (isMobile) return; // Disable on mobile for performance
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = (e.clientY / innerHeight) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
    };

    useEffect(() => {
        if (isMobile) return; // Skip event listener on mobile
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [isMobile]);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);
    const rotateX = useTransform(smoothY, [-1, 1], [55, 65]);

    // TRANSLATIONS
    const translations = {
        en: {
            portfolio: "PORTFOLIO",
            role1: "AI ENGINEER",
            role2: "FULL STACK",
            name: "DIOGO TEIXEIRA",
            sections: {
                profile: "PROFILE",
                experience: "PROFESSIONAL EXPERIENCE",
                projects: "FEATURED PROJECTS",
                skills: "SKILLS & TECH"
            },
            profileText: "Currently, I work as an AI Engineer and Full-Stack Developer at FundSight, building AI-powered products, automation tools, and production-grade web applications. I have experience delivering end-to-end solutions across Python, Vue.js, React, C#/.NET, Azure, and Google Vertex AI, with a strong focus on measurable impact, reliability, and practical business outcomes.",
            experience: {
                company1: {
                    company: "FundSight",
                    period: "2026 FEB - TODAY",
                    role: "AI Engineer / Full Stack Developer",
                    stack: "Gen AI • Python • Vue.js • React • TypeScript • C#/.NET • SQL • Azure • Google Vertex AI",
                    desc1: "► Built a Python/Vue.js web app and an AI-powered sentiment analysis pipeline that monitors client communications in real time, triggering automated alerts for relationship managers on prolonged inactivity or unresolved issues — increasing client contact by 30% and reducing incidents by 50%.",
                    desc2: "► Deployed and maintained production AI pipelines on Azure and Google Vertex AI, while also building internal automation tools in Python and C#/.NET to eliminate repetitive manual work across business teams.",
                    desc3: "► Refactored a client-meeting web application to auto-transcribe and index meetings using RAG, enabling natural-language search over past conversations, improving compliance and reducing manual note-taking time.",
                    desc4: "► Migrated and debugged existing SQL Server (T-SQL) logic, including triggers, stored procedures, and scheduled jobs, as part of refactoring the legacy application into the new system."
                },
                company2: {
                    title: "Soluis",
                    period: "2025 JAN - 2026 JAN",
                    role: "AI Engineer / Full Stack Developer",
                    stack: "React • C#/.NET • Python • AI • RAG • POSTGres",
                    desc1: "► Built internal developer and automation tools to streamline daily workflows and contributed to full-stack features using C#/.NET and React.",
                    desc2: "► Built a RAG-based search system over UAE real-estate legislation and regulatory documents, reducing the time needed to find relevant legal information.",
                    desc3: "► Designed and deployed an image-generation workflow powered by a fine-tuned model to produce realistic house, villa, and apartment previews, accelerating client deliverables and freeing up designers' time."
                },
                company3: {
                    title: "Freelance",
                    period: "2025 - PRESENT",
                    role: "AI Engineer / Full-Stack Developer",
                    stack: "Medusa.js • Whisper AI • n8n • React • Node.js • Supabase",
                    desc1: "► Built and deployed a static e-commerce website using Medusa.js, delivering a full online storefront with product catalog, cart, and checkout for a freelance client.",
                    desc2: "► Built a voice-to-form automation pipeline using Whisper AI for speech-to-text transcription, automatically filling out forms from spoken input and routing submissions into a validation workflow.",
                    desc3: "► Orchestrated the transcription-to-validation workflow using n8n, connecting the Whisper AI transcription step, form-filling logic, and validation hand-off into a single automated flow."
                },
                company4: {
                    title: "Samsys",
                    period: "Sep 2024 - Dec 2024",
                    role: "Full-Stack Programmer (Curricular Internship)",
                    stack: "React • TypeScript • .NET • Azure DevOps • Git/GitHub",
                    desc1: "► Designed and developed a custom plugin in React, TypeScript, and .NET, integrated into the company's main enterprise application.",
                    desc2: "► Created an intelligent warehouse management system with automatic reordering functionality, preventing stockouts by monitoring inventory levels and triggering purchase orders when thresholds were met.",
                    desc3: "► Collaborated in a Scrum team using Azure DevOps for sprint management and Git/GitHub for version control, while implementing frontend and backend features following company coding standards and best practices."
                },
                company5: {
                    title: "Visit Plann",
                    period: "Jul 2021 - Aug 2021",
                    role: "Backend Engineer (Summer Internship)",
                    stack: "Java • Android Studio • Geolocation APIs • REST APIs",
                    desc1: "► Implemented a monument recognition system using Java and Android Studio, with device geolocation APIs automatically identifying landmarks and providing multilingual audio guides.",
                    desc2: "► Developed backend services for a tourism planning platform, implementing data processing and API endpoints.",
                    desc3: "► Worked with senior developers to learn backend architecture patterns and best practices in a production environment."
                }
            },
            projects: {
                project1: {
                    title: "MOVIE NIGHT AI",
                    desc: "An intelligent movie discovery platform that uses RAG and vector search to provide hyper-personalized, explainable recommendations based on each user's taste profile.",
                    highlights: [
                        "► RAG-powered recommendations combining watch history with movie knowledge.",
                        "► Vector similarity search using Supabase pgvector to uncover hidden gems.",
                        "► AI assistant backed by Llama 3.1 via Groq for conversational movie discovery."
                    ],
                    stack: "React 19 • TypeScript • Vite • FastAPI • Python • Supabase • pgvector • Groq • Llama 3.1",
                    status: "FEATURED",
                    link: "https://github.com/Dee-Tee11/CinemaWebApp",
                    cta: "VIEW REPO ►"
                },
                project2: {
                    title: "ATLAS AI",
                    desc: "An intelligent desktop assistant that lives on your screen, featuring a floating liquid blob UI and a local LLM for privacy-focused assistance without cloud APIs.",
                    highlights: [
                        "► 100% local intelligence using Qwen2-1.5B-Instruct on GPU.",
                        "► Organic UI with interactive blob behavior and contextual memory.",
                        "► MCP-powered reminders and notes through natural-language commands."
                    ],
                    stack: "Python • CustomTkinter • PyTorch • Qwen2 • MCP • Local AI",
                    cta: "VIEW REPO ►",
                    link: "https://github.com/Dee-Tee11/Atlas-Ai"
                },
                project3: {
                    title: "DIOGO PORTFOLIO",
                    desc: "Designed and developed a modern interactive portfolio experience with React, Three.js, and immersive UI details to showcase technical work. This repository contains the live portfolio site.",
                    highlights: [
                        "► Built with React and 3D visualization.",
                        "► Focused on performance and visual storytelling."
                    ],
                    stack: "React • Vite • Three.js • Framer Motion",
                    cta: "VIEW REPO ►",
                    link: "https://github.com/Dee-Tee11/Diogo-Portofolio"
                }
            },
            skills: {
                tech: "Tech Stack",
                techList: [
                    "React • TypeScript • JavaScript",
                    "Vue.js • HTML/CSS",
                    "C#/.NET • Entity Framework",
                    "Python",
                    "Generative AI • RAG • MCP",
                    "LangChain • LangGraph • Hugging Face",
                    "Fine-Tuning (LoRA) • OCR • Vector DBs",
                    "Google Vertex AI • Azure Cloud",
                    "Azure DevOps • Docker • Kubernetes",
                    "n8n • CI/CD • Git/GitHub",
                    "SQL • SQL Server (T-SQL) • MySQL • PostgreSQL • Supabase"
                ],
                soft: "Soft Skills",
                softList: [
                    "Agile Methodology",
                    "Full Stack",
                    "Team Player",
                    "Determined/Persistent",
                    "Critical Thinking",
                    "Fast Learner",
                    "Autonomous",
                    "Responsible"
                ],
                languages: "Languages",
                languageList: [
                    "English (Fluent)",
                    "Portuguese (Native)"
                ]
            },
            footer: {
                contact: ":: CONTACT DATA ::",
                phone: "+351 931069434",
                email: "diogoluisteixeira@gmail.com",
                github: "https://github.com/Dee-Tee11/",
                linkedin: "https://www.linkedin.com/in/diogo-teixeira-9b108423b/",
                website: "https://diogo-portofolio.vercel.app"
            }
        },
        pt: {
            portfolio: "PORTFÓLIO",
            role1: "AI ENGINEER",
            role2: "FULL STACK",
            name: "DIOGO TEIXEIRA",
            sections: {
                profile: "PERFIL",
                experience: "EXPERIÊNCIA PROFISSIONAL",
                projects: "PROJETOS EM DESTAQUE",
                skills: "COMPETÊNCIAS E TECNOLOGIAS"
            },
            profileText: "Atualmente, trabalho como AI Engineer e Full-Stack Developer na FundSight, a construir produtos com IA, ferramentas de automação e aplicações web prontas para produção. Tenho experiência a entregar soluções de ponta a ponta em Python, Vue.js, React, C#/.NET, Azure e Google Vertex AI, com forte foco em impacto mensurável, fiabilidade e resultados práticos para o negócio.",
            experience: {
                company1: {
                    company: "FundSight",
                    period: "2026 FEV - ATUALIDADE",
                    role: "AI Engineer / Full Stack Developer",
                    stack: "Gen AI • Python • Vue.js • React • TypeScript • C#/.NET • SQL/MySQL • Azure • Google Vertex AI",
                    desc1: "► Construí uma aplicação web em Python/Vue.js e uma pipeline de análise de sentimento com IA para monitorizar comunicações com clientes em tempo real, acionando alertas automáticos para os gestores de relacionamento em caso de inatividade prolongada ou problemas por resolver — aumentando o contacto com clientes em 30% e reduzindo incidentes em 50%.",
                    desc2: "► Implementei e mantive pipelines de IA em produção no Azure e no Google Vertex AI, e também criei ferramentas internas de automação em Python e C#/.NET para eliminar trabalho manual repetitivo.",
                    desc3: "► Reestruturei uma aplicação web de reuniões com clientes para transcrever e indexar automaticamente reuniões com RAG, permitindo pesquisa em linguagem natural sobre conversas anteriores, melhorando a conformidade e reduzindo o tempo gasto em notas manuais."
                },
                company2: {
                    title: "Soluis",
                    period: "2025 JAN - 2026 JAN",
                    role: "AI Engineer / Full Stack Developer",
                    stack: "React • C#/.NET • Python • AI • RAG",
                    desc1: "► Construí ferramentas internas de desenvolvimento e automação para simplificar fluxos diários e contribui para funcionalidades full-stack com C#/.NET e React.",
                    desc2: "► Desenvolvi um sistema de pesquisa baseado em RAG sobre legislação e documentos regulatórios de imóveis no Médio Oriente, reduzindo o tempo necessário para encontrar informação legal relevante.",
                    desc3: "► Projetei e implementei um workflow de geração de imagens com um modelo afinado para produzir previews realistas de casas, vilas e apartamentos, acelerando os entregáveis dos clientes e libertando tempo dos designers."
                },
                company3: {
                    title: "Freelance",
                    period: "2025 - ATUALIDADE",
                    role: "AI Engineer / Full-Stack Developer",
                    stack: "Medusa.js • Whisper AI • n8n • React • Node.js",
                    desc1: "► Construí e implementei um website estático de e-commerce com Medusa.js, entregando uma loja online completa com catálogo de produtos, carrinho e checkout para um cliente freelance.",
                    desc2: "► Desenvolvi um pipeline de automação de voz para formulário usando Whisper AI para transcrição de fala para texto, preenchendo automaticamente formulários a partir de entrada falada e encaminhando submissões para um fluxo de validação.",
                    desc3: "► Orientei o workflow de transcrição para validação com n8n, ligando o passo de transcrição com Whisper AI, a lógica de preenchimento de formulários e a entrega para validação num único fluxo automatizado."
                },
                company4: {
                    title: "Samsys",
                    period: "Set 2024 - Dez 2024",
                    role: "Full-Stack Programmer (Curricular Internship)",
                    stack: "React • TypeScript • .NET • Azure DevOps • Git/GitHub",
                    desc1: "► Projetei e desenvolvi um plugin personalizado em React, TypeScript e .NET, integrado na aplicação empresarial principal da empresa.",
                    desc2: "► Criei um sistema inteligente de gestão de armazém com funcionalidade de reordenação automática, prevenindo rupturas de stock através da monitorização dos níveis de inventário e do acionamento de ordens de compra quando os limiares eram atingidos.",
                    desc3: "► Colaborei numa equipa Scrum utilizando Azure DevOps para gestão de sprints e Git/GitHub para controlo de versões, implementando funcionalidades frontend e backend de acordo com as boas práticas e standards da empresa."
                },
                company5: {
                    title: "Visit Plann",
                    period: "Jul 2021 - Aug 2021",
                    role: "Backend Engineer (Summer Internship)",
                    stack: "Java • Android Studio • APIs de geolocalização • REST APIs",
                    desc1: "► Implementei um sistema de reconhecimento de monumentos em Java e Android Studio, com APIs de geolocalização do dispositivo a identificar automaticamente marcos e a fornecer guias de áudio multilíngues.",
                    desc2: "► Desenvolvi serviços backend para uma plataforma de planeamento turístico, implementando processamento de dados e endpoints de API.",
                    desc3: "► Trabalhei com desenvolvedores séniores para aprender padrões de arquitetura backend e boas práticas num ambiente de produção."
                }
            },
            projects: {
                project1: {
                    title: "MOVIE NIGHT AI",
                    desc: "Uma plataforma inteligente de descoberta de filmes que utiliza RAG e pesquisa por vetores para oferecer recomendações hiperpessoais e explicáveis, com base no perfil de gosto de cada utilizador.",
                    highlights: [
                        "► Recomendações potenciadas por RAG, combinando histórico de visualizações com conhecimento sobre filmes.",
                        "► Pesquisa por similaridade vetorial com Supabase pgvector para descobrir pérolas escondidas.",
                        "► Assistente de IA apoiado por Llama 3.1 via Groq para descoberta conversacional de filmes."
                    ],
                    stack: "React 19 • TypeScript • Vite • FastAPI • Python • Supabase • pgvector • Groq • Llama 3.1",
                    status: "EM DESTAQUE",
                    link: "https://github.com/Dee-Tee11/CinemaWebApp",
                    cta: "VER REPO ►"
                },
                project2: {
                    title: "ATLAS AI",
                    desc: "Um assistente de desktop inteligente que vive no ecrã, com uma interface de blob líquido flutuante e um LLM local para assistência com foco em privacidade, sem depender de APIs na cloud.",
                    highlights: [
                        "► Inteligência 100% local com Qwen2-1.5B-Instruct em GPU.",
                        "► Interface orgânica com comportamento interativo do blob e memória contextual.",
                        "► Ferramentas MCP para lembretes e notas através de comandos em linguagem natural."
                    ],
                    stack: "Python • CustomTkinter • PyTorch • Qwen2 • MCP • Local AI",
                    cta: "VER REPO ►",
                    link: "https://github.com/Dee-Tee11/Atlas-Ai"
                },
                project3: {
                    title: "PORTFÓLIO 3D",
                    desc: "Projetei e desenvolvi uma experiência de portfólio interativa e moderna com React, Three.js e detalhes visuais imersivos para apresentar o trabalho técnico.",
                    highlights: [
                        "► Construído com React e visualização 3D.",
                        "► Focado em performance e storytelling visual."
                    ],
                    stack: "React • Vite • Three.js • Framer Motion",
                    cta: "VER REPO ►"
                }
            },
            skills: {
                tech: "Stack Tecnológica",
                techList: [
                    "React • TypeScript • JavaScript",
                    "Vue.js • HTML/CSS",
                    "C#/.NET • Entity Framework",
                    "Python",
                    "Generative AI • RAG • MCP",
                    "LangChain • LangGraph • Hugging Face",
                    "Fine-Tuning (LoRA) • OCR • Vector DBs",
                    "Google Vertex AI • Azure Cloud",
                    "Azure DevOps • Docker • Kubernetes",
                    "n8n • CI/CD • Git/GitHub",
                    "SQL • SQL Server (T-SQL) • MySQL • PostgreSQL • Supabase"
                ],
                soft: "Soft Skills",
                softList: [
                    "Agile Methodology",
                    "Full Stack",
                    "Team Player",
                    "Determined/Persistent",
                    "Critical Thinking",
                    "Fast Learner",
                    "Autonomous",
                    "Responsible"
                ],
                languages: "Idiomas",
                languageList: [
                    "English (Fluent)",
                    "Português (Nativo)"
                ]
            },
            footer: {
                contact: ":: DADOS DE CONTACTO ::",
                phone: "+351 931069434",
                email: "diogoluisteixeira@gmail.com",
                github: "https://github.com/Dee-Tee11/",
                linkedin: "https://www.linkedin.com/in/diogo-teixeira-9b108423b/",
                website: "https://diogo-portofolio.vercel.app"
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
                <Canvas
                    shadows={!isMobile}
                    dpr={[1, isMobile ? 1.5 : 2]}
                    performance={{ min: 0.5 }}
                    camera={{ position: [0, 0, 10], fov: 30 }}
                >
                    <ambientLight intensity={isMobile ? 0.6 : 0.8} />
                    <hemisphereLight intensity={isMobile ? 0.3 : 0.5} groundColor="#080820" />
                    <directionalLight position={[5, 10, 5]} intensity={isMobile ? 1 : 1.5} />
                    <pointLight position={[0, 5, 0]} intensity={isMobile ? 1.5 : 2} />
                    {!isMobile && <Environment preset="city" />}
                    <Suspense fallback={null}>
                        <ComputerModel scrollContainerRef={scrollContainerRef} isMobile={isMobile} />
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
                    // Disable 3D rotation on mobile for performance
                    rotateX: isMobile ? 60 : rotateX,
                    rotateY: isMobile ? 0 : rotateY,
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
                        {t.name}
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
                        <SectionHeader text={t.sections.profile} speed={20} />
                        <p style={{
                            color: '#e0e0e0',
                            fontFamily: '"Rajdhani", sans-serif',
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: isMobile ? 'blur(1px)' : 'blur(3px)',
                            padding: '25px',
                            borderRadius: '15px',
                            border: '1px solid rgba(209, 0, 209, 0.3)',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                            textShadow: isMobile ? 'none' : '1px 1px 3px #000'
                        }}>
                            {t.profileText}
                        </p>
                    </section>

                    {/* PROFESSIONAL EXPERIENCE */}
                    <section>
                        <SectionHeader text={t.sections.experience} speed={15} />

                        {/* Current Company */}
                        <ExperienceCard
                            company={t.experience.company1.company}
                            period={t.experience.company1.period}
                            role={t.experience.company1.role}
                            descriptions={[
                                t.experience.company1.desc1,
                                t.experience.company1.desc2,
                                t.experience.company1.desc3
                            ]}
                            stack={t.experience.company1.stack}
                            isMobile={isMobile}
                        />

                        {/* Previous Experience */}
                        <ExperienceCard
                            title={t.experience.company2.title}
                            period={t.experience.company2.period}
                            role={t.experience.company2.role}
                            descriptions={[
                                t.experience.company2.desc1,
                                t.experience.company2.desc2,
                                t.experience.company2.desc3
                            ]}
                            stack={t.experience.company2.stack}
                            isMobile={isMobile}
                        />

                        {/* Freelance Experience */}
                        <ExperienceCard
                            title={t.experience.company3.title}
                            period={t.experience.company3.period}
                            role={t.experience.company3.role}
                            descriptions={[
                                t.experience.company3.desc1,
                                t.experience.company3.desc2,
                                t.experience.company3.desc3
                            ]}
                            stack={t.experience.company3.stack}
                            isMobile={isMobile}
                        />

                        {/* Internship Experience */}
                        <ExperienceCard
                            title={t.experience.company4.title}
                            period={t.experience.company4.period}
                            role={t.experience.company4.role}
                            descriptions={[
                                t.experience.company4.desc1,
                                t.experience.company4.desc2,
                                t.experience.company4.desc3
                            ]}
                            stack={t.experience.company4.stack}
                            isMobile={isMobile}
                        />

                        {/* Summer Internship Experience */}
                        <ExperienceCard
                            title={t.experience.company5.title}
                            period={t.experience.company5.period}
                            role={t.experience.company5.role}
                            descriptions={[
                                t.experience.company5.desc1,
                                t.experience.company5.desc2,
                                t.experience.company5.desc3
                            ]}
                            stack={t.experience.company5.stack}
                            isMobile={isMobile}
                        />
                    </section>


                    {/* FEATURED PROJECTS */}
                    <section>
                        <SectionHeader text={t.sections.projects} speed={20} />

                        {/* Main Project - Active */}
                        <ProjectCard
                            title={t.projects.project1.title}
                            description={t.projects.project1.desc}
                            highlights={t.projects.project1.highlights}
                            stack={t.projects.project1.stack}
                            status={t.projects.project1.status}
                            cta={t.projects.project1.cta}
                            link={t.projects.project1.link}
                            isWorkingNow={true}
                            isMobile={isMobile}
                        />

                        {/* Second Project */}
                        <ProjectCard
                            title={t.projects.project2.title}
                            description={t.projects.project2.desc}
                            highlights={t.projects.project2.highlights}
                            stack={t.projects.project2.stack}
                            cta={t.projects.project2.cta}
                            link={t.projects.project2.link}
                            isMobile={isMobile}
                        />

                        {/* Portfolio Project */}
                        <ProjectCard
                            title={t.projects.project3.title}
                            description={t.projects.project3.desc}
                            highlights={t.projects.project3.highlights}
                            stack={t.projects.project3.stack}
                            cta={t.projects.project3.cta}
                            link={t.projects.project3.link}
                            isMobile={isMobile}
                        />
                    </section>

                    {/* SKILLS & TECNOLOGIAS */}
                    <section>
                        <SectionHeader text={t.sections.skills} speed={20} />
                        <SkillsSection
                            techStack={{
                                title: t.skills.tech,
                                items: t.skills.techList
                            }}
                            softSkills={{
                                title: t.skills.soft,
                                items: t.skills.softList
                            }}
                            languages={{
                                title: t.skills.languages,
                                items: t.skills.languageList
                            }}
                        />
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
                            {t.footer.phone}
                        </div>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href={`mailto:${t.footer.email}`} style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem', textDecoration: 'none' }}>
                            {t.footer.email}
                        </a>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href={t.footer.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>GITHUB</span>
                        </a>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href={t.footer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>LINKEDIN</span>
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
