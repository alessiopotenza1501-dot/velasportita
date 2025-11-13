import { ProductGrid } from "@/components/ProductGrid";
const ProductHighlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            <strong>Scarpe Italiane</strong> in Pelle Premium
          </h2>
          <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
            Collezione Calzature Classiche Made in Italy
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            <strong>Scarpe eleganti artigianali</strong> in <strong>pelle naturale</strong> per uomo e donna. 
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Scopri <strong>oxford classiche</strong>, <strong>mocassini raffinati</strong>, <strong>stivaletti eleganti</strong> e <strong>derby formali</strong> - tutto realizzato con l&apos;eccellenza della <strong>tradizione calzaturiera italiana</strong>.
          </p>
        </div>

        <ProductGrid limit={8} />
        
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/shop/men" aria-label="Esplora collezione completa scarpe uomo eleganti in pelle">
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 rounded-md shadow-lg transition-colors">
              Scarpe Uomo Eleganti
            </button>
          </a>
          <a href="/shop/women" aria-label="Esplora collezione completa scarpe donna raffinate in pelle">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-md transition-colors">
              Scarpe Donna Raffinate
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProductHighlights;