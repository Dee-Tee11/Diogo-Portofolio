import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile devices
 * Uses both media query and user agent for accurate detection
 */
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check viewport width
            const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

            // Check for touch capability
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // Check user agent for mobile devices
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const isMobileUA = mobileRegex.test(navigator.userAgent);

            // Device is mobile if it's a small screen OR (touch device AND mobile UA)
            setIsMobile(isSmallScreen || (isTouchDevice && isMobileUA));
        };

        checkMobile();

        // Listen for viewport changes
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handler = (e) => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const isMobileUA = mobileRegex.test(navigator.userAgent);
            setIsMobile(e.matches || (isTouchDevice && isMobileUA));
        };

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return isMobile;
};
