import { useTranslation } from "react-i18next";
import craftsmanshipImage from "@/assets/craftsmanship-formal.jpg";
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  const { t } = useTranslation();
  
  return (
    <section id="story" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              {t('brand_story.heading')}
            </h2>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
              <strong>Artigianato Italiano</strong> dal 1978
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t('brand_story.intro')} Le nostre <strong>scarpe classiche</strong> rappresentano l'eccellenza della <strong>tradizione calzaturiera italiana</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('brand_story.description')} Ogni paio di <strong>calzature in pelle</strong> è realizzato con maestria artigianale.
            </p>
            <Button variant="default" size="lg">
              {t('brand_story.cta')}
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={craftsmanshipImage} 
                alt="Artigiano italiano che crea calzature premium in pelle - Vela Sport Italia" 
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
