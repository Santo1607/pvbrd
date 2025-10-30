import { Heart, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-4 animate-glow">
            Happy Birthday,
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-6 animate-glow">
            Pavatharani
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-pink-500 animate-pulse-soft fill-pink-500" />
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 animate-float" />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-sans max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Wishing you endless smiles, joy, and success — from your friend for life
        </p>
        
        <div className="flex items-center justify-center gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <Sparkles className="w-6 h-6 text-purple-400 animate-sparkle" />
          <Sparkles className="w-8 h-8 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.3s' }} />
          <Sparkles className="w-6 h-6 text-pink-400 animate-sparkle" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
    </section>
  );
}
