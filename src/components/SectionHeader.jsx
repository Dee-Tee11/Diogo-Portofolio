import DecryptText from './DecryptText';

const SectionHeader = ({ text, speed = 20 }) => {
    return (
        <h2 style={{
            fontFamily: '"Press Start 2P", cursive',
            color: 'var(--color-primary)',
            fontSize: '1.5rem',
            marginBottom: '30px',
            borderBottom: '2px solid var(--color-primary)',
            paddingBottom: '10px',
            textShadow: '2px 2px 4px #000'
        }}>
            <DecryptText text={text} speed={speed} />
        </h2>
    );
};

export default SectionHeader;
