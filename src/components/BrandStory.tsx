import craftsmanshipImage from "@/assets/craftsmanship-formal.jpg";
import { Button } from "@/components/ui/button";
const BrandStory = () => {
  return <section id="story" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground"> Made in Italy raffinato</h2>
            <p className="text-lg text-muted-foreground mb-6">Nate nei migliori laboratori  italiani, Vela Sport Italia crea calzature classiche in pelle che incarnano un'eleganza senza tempo. Ogni paio coniuga la tradizionale artigianalità italiana con un design contemporaneo, perfetto per il professionista moderno.</p>
            <p className="text-lg text-muted-foreground mb-8">
              Using only premium Italian leather and time-honored techniques, we ensure every shoe meets exacting standards. From elegant dress shoes to sophisticated boots, Vela represents accessible luxury and enduring style.
            </p>
            <Button variant="default" size="lg">
              Discover Our Story
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img src={craftsmanshipImage} alt="Italian artisan crafting premium footwear" className="w-full h-auto hover-scale" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BrandStory;