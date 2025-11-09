import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import BrandStory from "@/components/BrandStory";
import ProductHighlights from "@/components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { FloatingCart } from "@/components/FloatingCart";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
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
