import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cars.jpg';

const HeroSection = () => {
  const features = [
    'Mudah Di Akses',
    'Proses Cepat',
    'Harga Terjangkau'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rental mobil terbaik di Sorong"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 text-primary-foreground mb-6">
            <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-sm font-medium">Terpercaya Sejak 2015</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Nikmati Mudahnya
            <span className="block text-secondary">Sewa Kendaraan</span>
            <span className="block">di Sorong</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rental mobil terpercaya dengan armada lengkap, pelayanan prima, 
            dan proses booking yang mudah untuk perjalanan nyaman Anda
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-background/30 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              size="lg"
              className="btn-hero-secondary px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/628123456789" className="flex items-center space-x-2">
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 backdrop-blur-sm border-background/30 text-primary-foreground hover:bg-background/30 px-8 py-4 text-lg"
              asChild
            >
              <a href="#kendaraan" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Lihat Kendaraan</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-background/30">
            <p className="text-primary-foreground/80 text-sm mb-4">
              Dipercaya oleh ribuan pelanggan
            </p>
            <div className="flex justify-center items-center space-x-8 text-primary-foreground/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5000+</div>
                <div className="text-sm">Pelanggan Puas</div>
              </div>
              <div className="w-px h-12 bg-background/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm">Unit Kendaraan</div>
              </div>
              <div className="w-px h-12 bg-background/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">10+</div>
                <div className="text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full p-1">
          <div className="w-1 h-3 bg-background/60 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;