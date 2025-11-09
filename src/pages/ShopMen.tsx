import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

const ShopMen = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                Men's Collection
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Performance footwear designed for the modern athlete
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
