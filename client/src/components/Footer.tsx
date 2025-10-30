import { Heart, Sparkles, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-primary/10 to-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-sparkle" />
          <Star className="w-4 h-4 text-pink-400 animate-sparkle" style={{ animationDelay: '0.3s' }} />
          <Heart className="w-6 h-6 text-red-400 animate-pulse-soft fill-red-400" />
          <Star className="w-4 h-4 text-purple-400 animate-sparkle" style={{ animationDelay: '0.6s' }} />
          <Sparkles className="w-5 h-5 text-blue-400 animate-sparkle" style={{ animationDelay: '0.9s' }} />
        </div>
        
        <p className="text-xl md:text-2xl font-sans text-foreground">
          Made with <Heart className="inline w-6 h-6 text-red-500 fill-red-500 animate-pulse-soft mx-1" /> by your friend
        </p>
        
        <div className="mt-6 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-300 animate-float" />
          <Sparkles className="w-3 h-3 text-pink-300 animate-float-slow" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="w-4 h-4 text-purple-300 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
