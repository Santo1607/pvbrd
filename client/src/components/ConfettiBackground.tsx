import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
}

export default function ConfettiBackground() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-400',
      'bg-purple-400',
      'bg-yellow-400',
      'bg-blue-400',
      'bg-green-400',
      'bg-red-400',
      'bg-orange-400',
    ];

    const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {confetti.map((conf) => (
        <div
          key={conf.id}
          className={`absolute w-2 h-2 ${conf.color} rounded-sm animate-confetti-fall`}
          style={{
            left: conf.left,
            animationDelay: conf.delay,
            animationDuration: conf.duration,
          }}
        />
      ))}
    </div>
  );
}
