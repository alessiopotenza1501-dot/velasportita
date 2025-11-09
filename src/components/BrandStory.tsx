import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="story" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Italian Craftsmanship Meets Modern Performance
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Born in the heart of Italy, Vela Sport Italia combines centuries of artisan tradition with cutting-edge athletic technology. Each pair is meticulously crafted to deliver unparalleled comfort and performance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our master craftsmen use only premium materials, ensuring every shoe meets the highest standards of quality and durability. From the first stitch to the final inspection, excellence is our promise.
            </p>
            <Button variant="default" size="lg">
              Discover Our Story
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={craftsmanshipImage}
                alt="Italian artisan crafting premium footwear"
                className="w-full h-auto hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
