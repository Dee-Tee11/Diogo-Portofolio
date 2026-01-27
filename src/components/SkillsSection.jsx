const SkillsSection = ({ techStack, softSkills, languages }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
        }}>
            {/* Tech Stack */}
            {techStack && (
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontFamily: '"Orbitron", sans-serif',
                        marginBottom: '15px'
                    }}>
                        {techStack.title}
                    </h3>
                    <ul style={{
                        color: '#ccc',
                        fontFamily: '"Rajdhani", sans-serif',
                        fontSize: '1.1rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        {techStack.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Soft Skills */}
            {softSkills && (
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontFamily: '"Orbitron", sans-serif',
                        marginBottom: '15px'
                    }}>
                        {softSkills.title}
                    </h3>
                    <ul style={{
                        color: '#ccc',
                        fontFamily: '"Rajdhani", sans-serif',
                        fontSize: '1.1rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        {softSkills.items.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Languages */}
            {languages && (
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontFamily: '"Orbitron", sans-serif',
                        marginBottom: '15px'
                    }}>
                        {languages.title}
                    </h3>
                    <ul style={{
                        color: '#ccc',
                        fontFamily: '"Rajdhani", sans-serif',
                        fontSize: '1.1rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        {languages.items.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SkillsSection;
