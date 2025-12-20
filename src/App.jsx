import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      // Small delay to ensure smooth transition and branding visibility
      const timer = setTimeout(() => {
        setStarted(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <LoadingScreen started={started} />
      <Hero />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
