import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorTrail: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const style: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '15px',
    height: '15px',
    borderRadius: '15%',
    backgroundColor: '#FAF081', 
    pointerEvents: 'none',
    zIndex: 9999,
  };

  return (
    <motion.div
      className="cursor-trail"
      style={{
        ...style,
        translateX: springX,
        translateY: springY,
      }}
    />
  );
};
