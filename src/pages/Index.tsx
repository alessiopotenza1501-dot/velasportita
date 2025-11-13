import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import WhyChoose from "@/components/WhyChoose";
import BrandStory from "@/components/BrandStory";
import ProductHighlights from "@/components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { FloatingCart } from "@/components/FloatingCart";
import { SEO } from "@/components/SEO";
import { getOrganizationSchema, getWebsiteSchema } from "@/utils/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebsiteSchema()
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vela Sport Italia - Scarpe Classiche Italiane in Pelle"
        description="Eleganza italiana senza tempo. Scarpe classiche in pelle per uomo e donna. Scopri calzature italiane premium - scarpe eleganti, stivali, mocassini. Made in Italy."
        url="https://velasportita.lovable.app"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <WhyChoose />
        <BrandStory />
        <ProductHighlights />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Index;
