import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-formal-shoes.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-accent-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Timeless Italian Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body">
            Classic Leather. Refined Style. Made in Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/shop/men">
              <Button variant="hero" size="lg">
                Shop Men
              </Button>
            </a>
            <a href="/shop/women">
              <Button variant="hero-outline" size="lg">
                Shop Women
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
