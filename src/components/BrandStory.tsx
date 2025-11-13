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
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              <strong>Artigianato Calzaturiero Italiano</strong> dal 1978
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              {t('brand_story.intro')} Le nostre <strong>scarpe classiche in pelle</strong> rappresentano l&apos;eccellenza della <strong>manifattura italiana</strong>.
            </p>

            {/* Key Features List */}
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary text-xl mt-0.5">✓</span>
                <span><strong>Pelle naturale selezionata</strong> - Solo i migliori pellami italiani</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary text-xl mt-0.5">✓</span>
                <span><strong>Lavorazione artigianale</strong> - Tecniche tradizionali tramandate</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary text-xl mt-0.5">✓</span>
                <span><strong>Comfort superiore</strong> - Design ergonomico italiano</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary text-xl mt-0.5">✓</span>
                <span><strong>Durabilità garantita</strong> - Qualità che dura nel tempo</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground mb-8">
              Ogni paio di <strong>calzature eleganti</strong> è realizzato con maestria nella nostra <strong>manifattura italiana</strong> in Campania.
            </p>
            
            <a href="/about" aria-label="Scopri la storia e tradizione di Vela Sport Italia">
              <Button variant="default" size="lg">
                {t('brand_story.cta')}
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={craftsmanshipImage} 
                alt="Artigiano calzaturiero italiano che lavora scarpe classiche in pelle - Vela Sport Italia Made in Italy" 
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
