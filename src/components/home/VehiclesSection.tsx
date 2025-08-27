import { Car, Users, Fuel, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VehiclesSection = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Avanza',
      type: 'MPV',
      price: 'Rp 350.000',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Manual',
        seats: '7 Kursi',
        fuel: 'Bensin'
      },
      popular: true
    },
    {
      id: 2,
      name: 'Honda Brio',
      type: 'City Car',
      price: 'Rp 250.000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Manual',
        seats: '5 Kursi',
        fuel: 'Bensin'
      },
      popular: false
    },
    {
      id: 3,
      name: 'Toyota Innova',
      type: 'MPV',
      price: 'Rp 450.000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Automatic',
        seats: '8 Kursi',
        fuel: 'Diesel'
      },
      popular: false
    },
    {
      id: 4,
      name: 'Daihatsu Xenia',
      type: 'MPV',
      price: 'Rp 300.000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Manual',
        seats: '7 Kursi',
        fuel: 'Bensin'
      },
      popular: false
    },
    {
      id: 5,
      name: 'Toyota Fortuner',
      type: 'SUV',
      price: 'Rp 650.000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Automatic',
        seats: '7 Kursi',
        fuel: 'Diesel'
      },
      popular: true
    },
    {
      id: 6,
      name: 'Suzuki Ertiga',
      type: 'MPV',
      price: 'Rp 320.000',
      image: 'https://images.unsplash.com/photo-1581540222194-0def8b2de7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      features: {
        transmission: 'Manual',
        seats: '7 Kursi',
        fuel: 'Bensin'
      },
      popular: false
    }
  ];

  return (
    <section id="kendaraan" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan Kendaraan Terbaik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Armada lengkap dengan berbagai pilihan kendaraan berkualitas untuk 
            memenuhi kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={vehicle.id}
              className="group card-hover border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {vehicle.popular && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Populer
                  </Badge>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                    {vehicle.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {vehicle.name}
                    </h3>
                    <div className="text-2xl font-bold text-primary">
                      {vehicle.price}
                      <span className="text-sm font-normal text-muted-foreground">/hari</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Settings className="w-4 h-4" />
                    <span>{vehicle.features.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.features.seats}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.features.fuel}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full btn-hero" asChild>
                    <a href={`https://wa.me/628123456789?text=Halo, saya tertarik untuk menyewa ${vehicle.name} dengan harga ${vehicle.price}/hari`}>
                      Pesan Sekarang
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`/kendaraan/${vehicle.id}`} className="flex items-center justify-center space-x-2">
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href="/kendaraan" className="flex items-center space-x-2">
              <Car className="w-5 h-5" />
              <span>Lihat Semua Kendaraan</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;