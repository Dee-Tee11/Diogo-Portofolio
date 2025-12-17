import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0) 100%)',
                color: 'white',
                borderBottom: '1px solid rgba(255, 42, 42, 0.1)'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                    NEO <span style={{ color: 'var(--color-primary)' }}>TOKYO</span>
                </div>
                <div className="jp-text" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
                    ヌードルバー
                </div>
            </div>

            <div style={{ display: 'flex', gap: '40px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600 }}>
                <a href="#" style={{ position: 'relative' }}>HOME</a>
                <a href="#menu">MENU</a>
                <a href="#location">LOCATION</a>
                <a href="#shop" style={{ color: 'var(--color-primary)' }}>ORDER ONLINE</a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
