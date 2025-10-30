import { Quote } from 'lucide-react';

export default function MessageSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Quote className="absolute -top-6 -left-4 md:-left-12 w-12 h-12 md:w-16 md:h-16 text-primary/20" />
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-card-border shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground font-sans text-center animate-glow">
              Hey Pava, it's been <span className="text-primary font-semibold">2 wonderful years</span> of friendship — 
              filled with laughs, late-night talks, and memories I'll always treasure. 
              You're one of the most <span className="text-primary font-semibold">genuine souls</span> I know. 
              Wishing you all the happiness, peace, and success in everything you do. 
              May every dream of yours come true. 
              You deserve the best always
            </p>
            
            <div className="flex justify-center mt-6">
              <span className="text-4xl md:text-5xl animate-pulse-soft">💕</span>
            </div>
          </div>
          
          <Quote className="absolute -bottom-6 -right-4 md:-right-12 w-12 h-12 md:w-16 md:h-16 text-primary/20 rotate-180" />
        </div>
      </div>
    </section>
  );
}
