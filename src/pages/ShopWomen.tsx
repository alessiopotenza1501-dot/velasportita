import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";

const ShopWomen = () => {
  const { t } = useTranslation();
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: t('shop.women_title'), url: "https://velasportita.lovable.app/shop/women" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${t('shop.women_title')} - Scarpe Eleganti Donna Made in Italy`}
        description={t('shop.women_subtitle')}
        keywords="scarpe donna, scarpe eleganti donna, stivaletti donna, mocassini donna, scarpe pelle donna, made in italy"
        url="https://velasportita.lovable.app/shop/women"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                {t('shop.women_title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('shop.women_subtitle')}
              </p>
            </div>
            
            <ProductGrid query="tag:women OR tag:womens" limit={24} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopWomen;
