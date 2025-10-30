import { Card } from '@/components/ui/card';
import image1 from '@assets/generated_images/Friends_laughing_together_joyfully_e3e69df5.png';
import image2 from '@assets/generated_images/Playful_dramatic_pose_moment_93fdd35f.png';
import image3 from '@assets/generated_images/Special_celebration_birthday_moment_d88b481a.png';
import image4 from '@assets/generated_images/Outdoor_adventure_with_friends_6a9b050b.png';
import image5 from '@assets/generated_images/Heartfelt_friendship_moment_f6e24b07.png';
import image6 from '@assets/generated_images/Celebration_with_confetti_joy_24e0b514.png';

const memories = [
  { image: image1, caption: 'The laughter never ends 😄' },
  { image: image2, caption: 'My forever drama queen 💅' },
  { image: image3, caption: 'Unforgettable days 💫' },
  { image: image4, caption: 'Adventures together 🌟' },
  { image: image5, caption: 'Forever grateful 💖' },
  { image: image6, caption: "Here's to many more! 🎉" },
];

export default function MemoriesGallery() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-4 text-primary">
          Our Beautiful Memories
        </h2>
        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12">
          Moments we'll cherish forever
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-memory-${index}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-memory-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg md:text-xl font-semibold" data-testid={`text-caption-${index}`}>
                    {memory.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
