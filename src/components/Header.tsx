import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "./NavLink";
import { Menu, X, Search, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { CartDrawer } from "./CartDrawer";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/vela-logo.png";

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Free Shipping Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        Free Shipping over €70
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Vela Sport Italia" className="h-12 w-auto" />
            </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/shop/men" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.men')}
            </NavLink>
            <NavLink to="/shop/women" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.women')}
            </NavLink>
            <NavLink to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.about')}
            </NavLink>
            <NavLink to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.blog')}
            </NavLink>
            <NavLink to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <CartDrawer />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink 
              to="/shop/men" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.men')}
            </NavLink>
            <NavLink 
              to="/shop/women" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.women')}
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/blog" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
          </nav>
        )}
        </div>
      </header>
    </>
  );
};

export default Header;
