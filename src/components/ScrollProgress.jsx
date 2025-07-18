import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const scrollableHeight = docHeight - winHeight;
      const progressPercentage = (scrolled / scrollableHeight) * 100;
      
      setProgress(Math.min(progressPercentage, 100));
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 h-1 z-50 transition-opacity duration-300",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      {/* Main progress bar */}
      <div 
        className="h-full bg-gradient-to-r from-primary via-accent to-primary-glow transition-all duration-100 ease-out"
        style={{ 
          width: `${progress}%`,
          boxShadow: `0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--accent) / 0.3)`
        }}
      />
      
      {/* Animated glow effect */}
      <div 
        className="absolute top-0 h-full bg-gradient-to-r from-primary-glow to-accent-glow opacity-60 animate-pulse"
        style={{ 
          width: `${progress}%`,
          filter: 'blur(2px)'
        }}
      />
      
      {/* Particle effect at the end */}
      {progress > 0 && (
        <div 
          className="absolute top-0 h-full w-2 bg-primary-glow animate-pulse"
          style={{ 
            left: `${progress}%`,
            transform: 'translateX(-50%)',
            boxShadow: '0 0 15px hsl(var(--primary-glow))'
          }}
        />
      )}
    </div>
  );
}