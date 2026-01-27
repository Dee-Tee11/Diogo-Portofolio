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
            role1: "YOUR ROLE 1",
            role2: "YOUR ROLE 2",
            name: "YOUR NAME",
            sections: {
                profile: "PROFILE",
                experience: "PROFESSIONAL EXPERIENCE",
                projects: "FEATURED PROJECTS",
                skills: "SKILLS & TECH"
            },
            profileText: "Your professional summary goes here. Describe your expertise, specializations, and what makes you unique as a professional. Keep it concise but impactful.",
            experience: {
                company1: {
                    company: "Current Company Name",
                    period: "MON YEAR - PRESENT",
                    role: "Your Job Title",
                    stack: "Your Tech Stack Here",
                    desc1: "► Your first responsibility or achievement.",
                    desc2: "► Your second responsibility or achievement.",
                    desc3: "► Your third responsibility or achievement."
                },
                company2: {
                    title: "Previous Company Name",
                    period: "MON YEAR - MON YEAR",
                    role: "Your Previous Role",
                    desc1: "► What you accomplished here.",
                    desc2: "► Key projects or technologies you worked with.",
                    desc3: "► Methodologies or tools used."
                },
                project1: {
                    title: "Special Project or Internship",
                    period: "MON YEAR - MON YEAR",
                    location: "Location (Optional)",
                    desc1: "► Project description and your role.",
                    desc2: "► Skills you developed or applied.",
                    desc3: "► Results or outcomes achieved.",
                    desc4: "► Additional achievements (optional).",
                    focus: "Focus: Key skills or competencies"
                },
                internship1: {
                    title: "Internship Name",
                    period: "MON YEAR - MON YEAR",
                    role: "Your Role During Internship",
                    desc1: "► What you did during this internship.",
                    desc2: "► Technologies: List technologies used"
                }
            },
            projects: {
                project1: {
                    title: "YOUR MAIN PROJECT",
                    desc: "Your main project description. Explain what the project does, its purpose, and key technologies used.",
                    highlights: [
                        "► First key achievement or feature of this project.",
                        "► Second major accomplishment or technical highlight.",
                        "► Third important aspect or innovation."
                    ],
                    stack: "TECH STACK 1 • TECH STACK 2 • TECH STACK 3 • TECH STACK 4",
                    status: "WORKING NOW" // Optional - only for active projects
                },
                project2: {
                    title: "YOUR SECOND PROJECT",
                    desc: "Another project description. Highlight what makes this project special and the problems it solves.",
                    highlights: [
                        "► Key feature or capability.",
                        "► Technical innovation or approach.",
                        "► User benefit or impact."
                    ],
                    stack: "TECH 1 • TECH 2 • TECH 3 • TECH 4",
                    cta: "VIEW PROJECT ►"
                },
                project3: {
                    title: "YOUR PORTFOLIO 3D",
                    desc: "Third project description. Could be this portfolio itself or another showcase project.",
                    highlights: [
                        "► Implementation detail or feature.",
                        "► Performance or design achievement."
                    ],
                    stack: "TECH STACK • FRAMEWORK • TOOLS",
                    cta: "VIEW REPO ►"
                }
            },
            skills: {
                tech: "Tech Stack",
                techList: [
                    "Technology 1 / Framework 1",
                    "Technology 2 / Framework 2",
                    "Technology 3 / Framework 3",
                    "Technology 4 / Tool 1",
                    "Technology 5 / Tool 2",
                    "Technology 6 / Tool 3",
                    "Version Control / DevOps Tools",
                    "Cloud Platform / Services"
                ],
                soft: "Soft Skills",
                softList: [
                    "Skill Example 1",
                    "Skill Example 2",
                    "Skill Example 3",
                    "Skill Example 4",
                    "Skill Example 5",
                    "Skill Example 6"
                ],
                languages: "Languages",
                languageList: [
                    "Language 1 (Proficiency Level)",
                    "Language 2 (Proficiency Level)",
                    "Language 3 (Proficiency Level)"
                ]
            },
            footer: {
                contact: ":: CONTACT DATA ::"
            }
        },
        pt: {
            portfolio: "PORTFÓLIO",
            role1: "A TUA FUNÇÃO 1",
            role2: "A TUA FUNÇÃO 2",
            name: "O TEU NOME",
            sections: {
                profile: "PERFIL",
                experience: "EXPERIÊNCIA PROFISSIONAL",
                projects: "PROJETOS EM DESTAQUE",
                skills: "COMPETÊNCIAS E TECNOLOGIAS"
            },
            profileText: "O teu resumo profissional. Descreve a tua experiência, especializações e o que te distingue como profissional. Mantém o texto conciso mas impactante.",
            experience: {
                company1: {
                    company: "Nome da Empresa Atual",
                    period: "MÊS ANO - PRESENTE",
                    role: "O Teu Cargo",
                    stack: "A Tua Stack Tecnológica",
                    desc1: "► A tua primeira responsabilidade ou conquista.",
                    desc2: "► A tua segunda responsabilidade ou conquista.",
                    desc3: "► A tua terceira responsabilidade ou conquista."
                },
                company2: {
                    title: "Nome da Empresa Anterior",
                    period: "MÊS ANO - MÊS ANO",
                    role: "O Teu Cargo Anterior",
                    desc1: "► O que você realizou aqui.",
                    desc2: "► Projetos-chave ou tecnologias com que trabalhou.",
                    desc3: "► Metodologias ou ferramentas utilizadas."
                },
                project1: {
                    title: "Projeto Especial ou Estágio",
                    period: "MÊS ANO - MÊS ANO",
                    location: "Localização (Opcional)",
                    desc1: "► Descrição do projeto e do teu papel.",
                    desc2: "► Competências que desenvolveste ou aplicaste.",
                    desc3: "► Resultados ou conquistas alcançados.",
                    desc4: "► Conquistas adicionais (opcional).",
                    focus: "Foco: Competências ou habilidades-chave"
                },
                internship1: {
                    title: "Nome do Estágio",
                    period: "MÊS ANO - MÊS ANO",
                    role: "O Teu Papel Durante o Estágio",
                    desc1: "► O que fizeste durante este estágio.",
                    desc2: "► Tecnologias: Lista de tecnologias utilizadas"
                }
            },
            projects: {
                project1: {
                    title: "O TEU PROJETO PRINCIPAL",
                    desc: "Descrição do teu projeto principal. Explica o que o projeto faz, o seu propósito e tecnologias-chave utilizadas.",
                    highlights: [
                        "► Primeira conquista ou funcionalidade-chave deste projeto.",
                        "► Segunda grande realização ou destaque técnico.",
                        "► Terceiro aspeto importante ou inovação."
                    ],
                    stack: "TECH STACK 1 • TECH STACK 2 • TECH STACK 3 • TECH STACK 4",
                    status: "A Desenvolver" // Opcional - apenas para projetos ativos
                },
                project2: {
                    title: "O TEU SEGUNDO PROJETO",
                    desc: "Outra descrição de projeto. Destaca o que torna este projeto especial e os problemas que resolve.",
                    highlights: [
                        "► Funcionalidade ou capacidade-chave.",
                        "► Inovação ou abordagem técnica.",
                        "► Benefício ou impacto para o utilizador."
                    ],
                    stack: "TECH 1 • TECH 2 • TECH 3 • TECH 4",
                    cta: "VER PROJETO ►"
                },
                project3: {
                    title: "O TEU PORTFÓLIO 3D",
                    desc: "Terceira descrição de projeto. Pode ser este portfólio ou outro projeto de demonstração.",
                    highlights: [
                        "► Detalhe de implementação ou funcionalidade.",
                        "► Conquista de desempenho ou design."
                    ],
                    stack: "TECH STACK • FRAMEWORK • FERRAMENTAS",
                    cta: "VER REPO ►"
                }
            },
            skills: {
                tech: "Stack Tecnológica",
                techList: [
                    "Tecnologia 1 / Framework 1",
                    "Tecnologia 2 / Framework 2",
                    "Tecnologia 3 / Framework 3",
                    "Tecnologia 4 / Ferramenta 1",
                    "Tecnologia 5 / Ferramenta 2",
                    "Tecnologia 6 / Ferramenta 3",
                    "Controlo de Versão / DevOps",
                    "Plataforma Cloud / Serviços"
                ],
                soft: "Soft Skills",
                softList: [
                    "Exemplo de Skill 1",
                    "Exemplo de Skill 2",
                    "Exemplo de Skill 3",
                    "Exemplo de Skill 4",
                    "Exemplo de Skill 5",
                    "Exemplo de Skill 6"
                ],
                languages: "Idiomas",
                languageList: [
                    "Idioma 1 (Nível de Proficiência)",
                    "Idioma 2 (Nível de Proficiência)",
                    "Idioma 3 (Nível de Proficiência)"
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
                            isMobile={isMobile}
                        />


                        {/* Special Project or Academic Experience */}
                        <ExperienceCard
                            title={t.experience.project1.title}
                            period={t.experience.project1.period}
                            location={t.experience.project1.location}
                            descriptions={[
                                t.experience.project1.desc1,
                                t.experience.project1.desc2,
                                t.experience.project1.desc3,
                                t.experience.project1.desc4,
                                t.experience.project1.focus
                            ]}
                            isMobile={isMobile}
                        />


                        {/* Early Experience / Internship */}
                        <ExperienceCard
                            title={t.experience.internship1.title}
                            period={t.experience.internship1.period}
                            role={t.experience.internship1.role}
                            descriptions={[
                                t.experience.internship1.desc1,
                                t.experience.internship1.desc2
                            ]}
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
                            link="https://your-project-url.com"
                            isMobile={isMobile}
                        />

                        {/* Portfolio Project */}
                        <ProjectCard
                            title={t.projects.project3.title}
                            description={t.projects.project3.desc}
                            highlights={t.projects.project3.highlights}
                            stack={t.projects.project3.stack}
                            cta={t.projects.project3.cta}
                            link="https://github.com/yourusername/your-portfolio"
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
                            +XX XXX XXX XXX
                        </div>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <div style={{ color: '#ccc', fontFamily: '"Rajdhani", sans-serif', fontSize: '1rem' }}>
                            your.email@example.com
                        </div>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ color: 'var(--color-primary)' }}>LINKEDIN</span>
                        </a>
                        <div style={{ color: 'var(--color-primary)' }}>|</div>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontFamily: '"Orbitron", sans-serif', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
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
