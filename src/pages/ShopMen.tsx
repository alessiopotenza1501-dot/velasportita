import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";

const ShopMen = () => {
  const { t } = useTranslation();
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: t('shop.men_title'), url: "https://velasportita.lovable.app/shop/men" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${t('shop.men_title')} - Scarpe Eleganti Uomo Made in Italy`}
        description={t('shop.men_subtitle')}
        keywords="scarpe uomo, scarpe eleganti uomo, oxford uomo, chelsea boots, mocassini uomo, scarpe pelle uomo, made in italy"
        url="https://velasportita.lovable.app/shop/men"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                {t('shop.men_title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('shop.men_subtitle')}
              </p>
            </div>
            
            <ProductGrid query="tag:men OR tag:mens" limit={24} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopMen;
