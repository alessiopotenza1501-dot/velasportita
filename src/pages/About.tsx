import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craftsmanshipImage from "@/assets/craftsmanship-formal.jpg";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";

const About = () => {
  const { t } = useTranslation();
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportita.lovable.app" },
    { name: t('about.title'), url: "https://velasportita.lovable.app/about" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${t('about.title')} - Tradizione Calzaturiera Italiana`}
        description={t('about.intro')}
        keywords="artigianato italiano, calzature italiane, made in italy, tradizione calzaturiera, campania"
        url="https://velasportita.lovable.app/about"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  {t('brand_story.heading')}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {t('about.intro')}
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  {t('brand_story.description')}
                </p>
              </div>
              
              <div>
                <img 
                  src={craftsmanshipImage} 
                  alt="Artigianato calzaturiero italiano - Vela Sport Italia" 
                  className="w-full rounded-lg shadow-xl" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-center mb-12">
                {t('about.values_title')}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {t('about.quality_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.quality_desc')}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {t('about.style_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.style_desc')}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {t('about.craftsmanship_title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.craftsmanship_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;