import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-formal-shoes.jpg";

const Hero = () => {
  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/75 to-accent/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-accent-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            <strong>Scarpe Italiane in Pelle</strong> - Eleganza Classica Made in Italy
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 font-body">
            <strong>Calzature artigianali premium</strong> per uomo e donna. Scopri l'eccellenza della <strong>tradizione calzaturiera italiana</strong>.
          </p>

          {/* Bulleted Benefits */}
          <ul className="mb-8 space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Pelle italiana premium</strong> - Materiali di altissima qualità</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Made in Italy</strong> - Artigianato tradizionale dal 1978</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Stile senza tempo</strong> - Eleganza classica per ogni occasione</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/shop/men" aria-label="Scopri scarpe eleganti uomo in pelle italiana">
              <Button variant="hero" size="lg">Scarpe Uomo Eleganti</Button>
            </a>
            <a href="/shop/women" aria-label="Scopri scarpe eleganti donna in pelle italiana">
              <Button variant="hero-outline" size="lg">Scarpe Donna Raffinate</Button>
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
