import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
}

function ParallaxSection({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = '', 
  overlay = true 
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${offsetY * speed}px)`,
            willChange: 'transform'
          }}
        />
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export default ParallaxSection;