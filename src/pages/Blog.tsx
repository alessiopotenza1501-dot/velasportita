import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { getBreadcrumbSchema } from "@/utils/structuredData";

const Blog = () => {
  const { t } = useTranslation();
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: "https://velasportitalia.lovable.app" },
    { name: "Blog", url: "https://velasportitalia.lovable.app/blog" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blog - Storie e Consigli sulle Scarpe Italiane | Vela Sport Italia"
        description={t('blog.subtitle')}
        keywords="blog scarpe, stile italiano, cura scarpe pelle, tendenze calzature"
        url="https://velasportitalia.lovable.app/blog"
        structuredData={breadcrumbData}
      />
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('blog.subtitle')}
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center py-16 bg-secondary rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('blog.coming_soon')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('blog.coming_soon_desc')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
