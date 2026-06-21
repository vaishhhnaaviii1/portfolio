import React, { useRef, useEffect } from 'react';

export default function LetterGlitch() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration for the Glitch Effect
    const fontSize = 20; 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|<>?~'; 
    
    // UPDATED: Darker base color to make the non-glitched text stand out more
    const baseColor = 'rgba(107, 95, 84, 0.25)'; 
    const glitchColor = 'rgba(249, 115, 22, 0.9)'; // Bright Orange

    let columns, rows;
    let grid = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      rows = Math.floor(canvas.height / fontSize);
      
      grid = [];
      for (let i = 0; i < columns; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
          grid[i][j] = {
            char: chars[Math.floor(Math.random() * chars.length)],
            color: baseColor,
            isGlitching: false,
            glitchTimer: 0
          };
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px monospace`; // Added 'bold' to make letters thicker
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const cell = grid[i][j];

          if (!cell.isGlitching && Math.random() < 0.001) {
            cell.isGlitching = true;
            cell.char = chars[Math.floor(Math.random() * chars.length)];
            cell.color = glitchColor;
            cell.glitchTimer = Math.floor(Math.random() * 20) + 10; 
          }

          if (cell.isGlitching) {
            cell.glitchTimer--;
            if (Math.random() < 0.3) {
              cell.char = chars[Math.floor(Math.random() * chars.length)];
            }
            if (cell.glitchTimer <= 0) {
              cell.isGlitching = false;
              cell.color = baseColor;
            }
          }

          ctx.fillStyle = cell.color;
          ctx.fillText(cell.char, i * fontSize + fontSize / 2, j * fontSize + fontSize / 2);
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-100"
    />
  );
}