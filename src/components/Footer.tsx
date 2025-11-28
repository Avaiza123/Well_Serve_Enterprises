import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+923345341125', '_blank');
  };

  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">WellServe Enterprises</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in surgical products and medical supplies. Quality, reliability, and service excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +923345341125
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@wellserve.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Medical Plaza, NY
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full"
              variant="default"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WellServe Enterprises. All rights reserved.</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
