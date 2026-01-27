import { motion } from 'framer-motion';

const ProjectCard = ({
    title,
    description,
    highlights = [],
    stack,
    status,
    cta,
    link,
    isWorkingNow = false,
    isMobile = false
}) => {
    const cardStyle = {
        background: 'rgba(5, 5, 10, 0.6)',
        backdropFilter: isMobile ? 'blur(2px)' : 'blur(5px)',
        border: isWorkingNow ? '2px solid var(--color-primary)' : '1px solid var(--color-primary)',
        padding: '25px',
        cursor: link ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '40px'
    };

    const animations = isWorkingNow ? {
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
    } : {
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
    };

    const hoverAnimation = !isMobile ? {
        scale: isWorkingNow ? 1.02 : 1.05,
        boxShadow: isWorkingNow ? '0 0 50px rgba(209, 0, 209, 1)' : '0 0 40px rgba(209, 0, 209, 0.8)',
        borderColor: '#fff',
        transition: {
            duration: 0.3,
            ease: "easeOut",
            repeat: 0
        }
    } : {};

    const CardContent = () => (
        <motion.div
            style={cardStyle}
            animate={animations}
            whileHover={hoverAnimation}
        >
            {/* Status Badge - WORKING NOW */}
            {status && (
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
                    {status}
                </div>
            )}

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'var(--color-primary)'
            }} />

            <h3 style={{
                fontFamily: '"Press Start 2P", cursive',
                fontSize: '1.2rem',
                color: '#fff',
                marginBottom: '15px',
                textShadow: '3px 3px 0px #000, 0 0 10px rgba(0,0,0,0.8)'
            }}>
                {title}
            </h3>

            <p style={{
                color: '#e0e0e0',
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: '1.1rem',
                marginBottom: '15px',
                textShadow: isMobile ? 'none' : '1px 1px 2px #000'
            }}>
                {description}
            </p>

            {highlights.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                    {highlights.map((highlight, index) => (
                        <li key={index} style={{
                            color: '#e0e0e0',
                            fontFamily: '"Rajdhani", sans-serif',
                            fontSize: '1rem',
                            marginBottom: '5px',
                            textShadow: isMobile ? 'none' : '1px 1px 2px #000'
                        }}>
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}

            <p style={{
                color: 'var(--color-primary)',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '0.75rem',
                lineHeight: '1.6',
                textShadow: '2px 2px 0px #000',
                fontWeight: 'bold'
            }}>
                {stack}
            </p>

            {cta && (
                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontFamily: '"Orbitron", sans-serif'
                    }}>
                        {cta}
                    </span>
                </div>
            )}
        </motion.div>
    );

    // Wrap in link if link prop is provided
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <CardContent />
            </a>
        );
    }

    return <CardContent />;
};

export default ProjectCard;
