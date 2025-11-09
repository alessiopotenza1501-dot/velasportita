import { useState } from "react";
import { ShoppingCart, Search, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import velaLogo from "@/assets/vela-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Free Shipping Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        Free Shipping over €70
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={velaLogo} alt="Vela Sport Italia" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#men" className="text-foreground hover:text-primary font-medium transition-colors">
                Men
              </a>
              <a href="#women" className="text-foreground hover:text-primary font-medium transition-colors">
                Women
              </a>
              <a href="#story" className="text-foreground hover:text-primary font-medium transition-colors">
                About
              </a>
              <a href="#blog" className="text-foreground hover:text-primary font-medium transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-foreground hover:text-primary transition-colors" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors relative" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a href="#men" className="text-foreground hover:text-primary font-medium transition-colors">
                  Men
                </a>
                <a href="#women" className="text-foreground hover:text-primary font-medium transition-colors">
                  Women
                </a>
                <a href="#story" className="text-foreground hover:text-primary font-medium transition-colors">
                  About
                </a>
                <a href="#blog" className="text-foreground hover:text-primary font-medium transition-colors">
                  Blog
                </a>
                <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
