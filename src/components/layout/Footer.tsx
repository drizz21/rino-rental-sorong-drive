import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-xl font-bold">Rino Rental</span>
                <span className="text-sm block leading-none opacity-90">Sorong</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Solusi terpercaya untuk kebutuhan rental mobil di Sorong. Armada lengkap, 
              pelayanan prima, dan harga terjangkau untuk perjalanan yang nyaman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { name: 'Beranda', href: '/' },
                { name: 'Kendaraan', href: '/kendaraan' },
                { name: 'Galeri', href: '/galeri' },
                { name: 'Tentang Kami', href: '/tentang' },
                { name: 'Kontak', href: '/kontak' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Basuki Rahmat No. 123<br />
                  Sorong, Papua Barat 98411
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a
                  href="tel:+628123456789"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  +62 812-3456-789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:info@rinorental.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@rinorental.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  Senin - Minggu<br />
                  08:00 - 20:00 WITA
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/628123456789"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary-dark transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-secondary-foreground" />
              </a>
            </div>
            <a
              href="https://wa.me/628123456789"
              className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors text-sm font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} Rino Rental Sorong. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;