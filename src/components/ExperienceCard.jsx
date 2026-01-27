const ExperienceCard = ({
    title,
    company,
    role,
    period,
    location,
    descriptions,
    stack,
    isMobile = false
}) => {
    return (
        <div style={{
            marginBottom: '40px',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: isMobile ? 'blur(1px)' : 'blur(3px)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(209, 0, 209, 0.3)',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '10px',
                flexWrap: 'wrap'
            }}>
                <h3 style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '1.4rem',
                    color: '#fff',
                    textShadow: '2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.8)'
                }}>
                    {title || company}
                </h3>
                <span style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '0.7rem',
                    color: 'var(--color-primary)',
                    textShadow: '2px 2px 2px #000'
                }}>
                    {period}
                </span>
            </div>

            {role && (
                <h4 style={{
                    color: '#fff',
                    marginBottom: '15px',
                    textShadow: '2px 2px 4px #000',
                    fontWeight: 'bold'
                }}>
                    {role}
                </h4>
            )}

            {location && (
                <h4 style={{
                    color: '#ccc',
                    marginBottom: '15px',
                    textShadow: '1px 1px 2px #000',
                    fontSize: '1rem',
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: 'bold'
                }}>
                    {location}
                </h4>
            )}

            <ul style={{
                listStyle: 'none',
                paddingLeft: '0',
                color: '#e0e0e0',
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: '1.1rem',
                textShadow: isMobile ? 'none' : '1px 1px 3px #000'
            }}>
                {descriptions.map((desc, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {desc}
                    </li>
                ))}
                {stack && (
                    <li style={{
                        marginBottom: '10px',
                        color: 'var(--color-primary)',
                        fontSize: '0.9rem',
                        textShadow: '1px 1px 2px #000',
                        fontWeight: 'bold'
                    }}>
                        Stack: {stack}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ExperienceCard;
