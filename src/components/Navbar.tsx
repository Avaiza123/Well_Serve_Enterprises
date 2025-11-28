import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = getCartCount();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
           <img
    src="/public/logo.png"  // replace with actual path
    alt="WellServe Enterprises Logo"
    className="w-10 h-10 rounded-lg object-cover"
  />
            <span className="text-xl font-bold text-foreground">WellServe Enterprises</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button variant="default">Admin Portal</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" className="block py-2" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart {cartCount > 0 && `(${cartCount})`}
              </Button>
            </Link>
            <Link to="/admin/login" className="block py-2" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Admin Portal</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
