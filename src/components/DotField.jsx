import React, { useEffect, useRef } from 'react';

export default function DotField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];

    // Configuration
    const dotSize = 2;
    const gap = 30; // Spacing between dots
    const mouseProximity = 100; // How far the mouse effect reaches
    const baseColor = 'rgba(249, 115, 22, 0.3)'; // Subtle Orange
    const activeColor = 'rgba(249, 115, 22, 1)'; // Bright Orange

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      const cols = Math.floor(canvas.width / gap);
      const rows = Math.floor(canvas.height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap + gap / 2,
            y: j * gap + gap / 2,
            baseX: i * gap + gap / 2,
            baseY: j * gap + gap / 2,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction logic
        let size = dotSize;
        let color = baseColor;
        let offsetX = 0;
        let offsetY = 0;

        if (distance < mouseProximity) {
          const force = (mouseProximity - distance) / mouseProximity;
          size = dotSize + force * 3; // Dots grow when hovered
          color = activeColor;
          
          // Slight repulsion effect
          offsetX = (dx / distance) * force * -10;
          offsetY = (dy / distance) * force * -10;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.baseX + offsetX, dot.baseY + offsetY, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', initGrid);
    initGrid();
    draw();

    return () => {
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}