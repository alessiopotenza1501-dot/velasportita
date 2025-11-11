import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('newsletter.subtitle')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.email_placeholder')}
              className="flex-1 bg-primary-foreground text-accent border-0 h-12 rounded-full px-6"
              required
            />
            <Button
              type="submit"
              variant="hero-outline"
              size="lg"
              className="rounded-full px-8"
            >
              {t('newsletter.subscribe')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
