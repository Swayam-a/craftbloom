import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/sound';

interface Petal {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const emojis = ['🌸', '✨', '🌼', '💖', '🌺', '🍃'];
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 95,
      duration: 14 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 16 + Math.random() * 12,
    }));
    setPetals(generated);
  }, []);

  const handlePetalClick = (e: React.MouseEvent, petal: Petal) => {
    soundFX.playPop();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    try {
      confetti({
        particleCount: 15,
        spread: 45,
        startVelocity: 15,
        origin: { x, y },
        colors: ['#EC4899', '#A855F7', '#FBBF24', '#34D399'],
        ticks: 60,
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none">
      {petals.map((petal) => (
        <span
          key={petal.id}
          onClick={(e) => handlePetalClick(e, petal)}
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size}px`,
          }}
          className="absolute -top-12 animate-floatPetal opacity-40 hover:opacity-100 hover:scale-125 transition-transform pointer-events-auto cursor-pointer"
          title="Pop me! 🌸"
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
};
