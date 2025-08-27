import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import VehiclesSection from '@/components/home/VehiclesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VehiclesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
