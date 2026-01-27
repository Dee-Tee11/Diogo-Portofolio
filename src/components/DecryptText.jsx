import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const DecryptText = ({ text, className, style, speed = 45, autoStart = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false); // Kept for potential styling hooks, though unused for logic now
  const hasStartedRef = useRef(false);
  const intervalRef = useRef(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const shouldStart = autoStart || isInView;
    // Reset hasStartedRef if text changes to allow re-animation
    // But we need to distinguish between initial load and prop change
    // For now, let's just force update if text changes

    if (shouldStart) {
      // Clear any existing interval
      if (intervalRef.current) clearInterval(intervalRef.current);

      hasStartedRef.current = true;
      setIsScrambling(true);

      let iteration = 0;

      intervalRef.current = setInterval(() => {
        setDisplayText(() => {
          // Logic to mix current iteration with target text
          return text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsScrambling(false);
        }

        iteration += 1 / 3;
      }, speed);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [isInView, autoStart, text, speed]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ ...style, display: 'inline-block', minHeight: '1.5em' }} // Added minHeight to prevent layout shift
    >
      {displayText || text}
    </motion.div>
  );
};

export default DecryptText;
