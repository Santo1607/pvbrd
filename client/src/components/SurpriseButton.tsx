import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Volume2, VolumeX } from 'lucide-react';

export default function SurpriseButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a royalty-free Happy Birthday melody
    // Using a public domain Happy Birthday instrumental
    const audio = new Audio('https://mobcup.fm/ringtone/remo-happy-birthday-bgm-S6J2TSg8?utm_source=share&utm_medium=web&utm_name=detail');
    audio.loop = false;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleClick = () => {
    console.log('Surprise button clicked!');
    
    // Toggle music playback
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed:', error);
          // Fallback: still show visual effects even if audio fails
        });
        setIsPlaying(true);
      }
    }
    
    // Trigger fireworks
    setShowFireworks(true);
    
    const newFireworks = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20,
    }));
    
    setFireworks(newFireworks);
    
    setTimeout(() => {
      setShowFireworks(false);
      setFireworks([]);
    }, 3000);
  };

  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
          Ready for a Surprise?
        </h2>
        
        <Button
          size="lg"
          onClick={handleClick}
          className="text-xl px-8 py-6 h-auto animate-pulse-soft"
          data-testid="button-surprise"
        >
          <Gift className="w-6 h-6 mr-2" />
          Click for a surprise 🎀
          {isPlaying ? (
            <Volume2 className="w-5 h-5 ml-2" />
          ) : (
            <VolumeX className="w-5 h-5 ml-2 opacity-50" />
          )}
        </Button>
        
        <p className="mt-4 text-sm text-muted-foreground">
          {isPlaying ? '🎵 Music playing! 🎵' : 'Click to play birthday music'}
        </p>
      </div>
      
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {fireworks.map((fw, idx) => (
            <div
              key={fw.id}
              className="absolute"
              style={{
                left: `${fw.x}%`,
                top: `${fw.y}%`,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-bounce-in"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-${20 + Math.random() * 40}px)`,
                    animationDelay: `${idx * 0.1}s`,
                    animationDuration: '1s',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
