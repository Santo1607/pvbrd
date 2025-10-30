import ConfettiBackground from '@/components/ConfettiBackground';
import HeroSection from '@/components/HeroSection';
import MessageSection from '@/components/MessageSection';
import MemoriesGallery from '@/components/MemoriesGallery';
import BlessingsSection from '@/components/BlessingsSection';
import SurpriseButton from '@/components/SurpriseButton';
import Footer from '@/components/Footer';

export default function BirthdayPage() {
  return (
    <div className="relative min-h-screen">
      <ConfettiBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <MessageSection />
        <MemoriesGallery />
        <BlessingsSection />
        <SurpriseButton />
        <Footer />
      </div>
    </div>
  );
}
