import { Card } from '@/components/ui/card';
import { Heart, Sparkles, Star, Smile } from 'lucide-react';
import { useEffect, useState } from 'react';

const blessings = [
  { text: 'Wishing you good health and happiness!', icon: Heart, color: 'text-pink-500' },
  { text: 'Keep smiling always, Pava 😍', icon: Smile, color: 'text-yellow-500' },
  { text: 'May your dreams bloom brighter than ever 🌸', icon: Sparkles, color: 'text-purple-500' },
  { text: "The world's better with you in it 💖", icon: Star, color: 'text-blue-500' },
  { text: 'May every moment bring you joy!', icon: Heart, color: 'text-red-500' },
  { text: 'Your smile lights up the world! ✨', icon: Sparkles, color: 'text-orange-500' },
];

export default function BlessingsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    blessings.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-accent/10 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-4 text-primary">
          Blessings for You
        </h2>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-16">
          Wishes from the heart
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blessings.map((blessing, index) => {
            const Icon = blessing.icon;
            const isVisible = visibleCards.includes(index);
            const rotation = (index % 2 === 0 ? -1 : 1) * (Math.random() * 2 + 1);
            
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                style={{
                  transform: isVisible ? `rotate(${rotation}deg)` : 'scale(0)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
                data-testid={`card-blessing-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className={`w-8 h-8 ${blessing.color}`} />
                  </div>
                  <p className="text-lg md:text-xl font-sans text-foreground" data-testid={`text-blessing-${index}`}>
                    {blessing.text}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
