import { ProductGrid } from "@/components/ProductGrid";
const ProductHighlights = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">Collezioni in primo piano</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Scarpe Classiche Italiane per ogni occasione</p>
        </div>

        <ProductGrid limit={8} />
        
        <div className="text-center mt-12">
          <a href="/shop/men" className="inline-block mr-4">
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-md shadow-lg transition-colors">​Uomo</button>
          </a>
          <a href="/shop/women" className="inline-block">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors">​Donna</button>
          </a>
        </div>
      </div>
    </section>;
};
export default ProductHighlights;