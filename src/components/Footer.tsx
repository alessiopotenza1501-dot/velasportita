import { Facebook, Instagram } from "lucide-react";
import velaLogo from "@/assets/vela-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img src={velaLogo} alt="Vela Sport Italia" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80">
              Italian performance footwear designed for speed and crafted for comfort.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#men" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#women" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Women's Shoes
                </a>
              </li>
              <li>
                <a href="#new" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#sale" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#shipping" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#sizing" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#story" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#sustainability" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#blog" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm opacity-60">
              © 2024 Vela Sport Italia. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#terms" className="opacity-60 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
