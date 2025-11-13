import productMen from "@/assets/product-men-oxford-black.jpg";
import productWomen from "@/assets/product-women-ankle-boots.jpg";
const FeaturedCollections = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Men's Collection */}
          <a href="/shop/men" className="group relative overflow-hidden rounded-lg shadow-lg hover-scale cursor-pointer h-[500px]" aria-label="Scarpe uomo eleganti italiane in pelle">
            <img 
              src={productMen} 
              alt="Scarpe uomo eleganti - Oxford nere in pelle italiana Made in Italy" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-accent-foreground">
              <h3 className="text-4xl font-heading font-bold mb-3">
                <strong>Scarpe Uomo</strong> Eleganti
              </h3>
              <p className="text-lg mb-4">
                <strong>Calzature classiche</strong> in pelle italiana
              </p>
              <span className="inline-block text-primary-foreground bg-primary px-6 py-3 rounded-md font-semibold group-hover:bg-primary-hover transition-colors">Scopri →</span>
            </div>
          </a>

          {/* Women's Collection */}
          <a href="/shop/women" className="group relative overflow-hidden rounded-lg shadow-lg hover-scale cursor-pointer h-[500px]" aria-label="Scarpe donna eleganti italiane in pelle">
            <img 
              src={productWomen} 
              alt="Scarpe donna eleganti - Stivaletti in pelle italiana Made in Italy" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-accent-foreground">
              <h3 className="text-4xl font-heading font-bold mb-3">
                <strong>Scarpe Donna</strong> Raffinate
              </h3>
              <p className="text-lg mb-4">
                <strong>Calzature eleganti</strong> artigianali italiane
              </p>
              <span className="inline-block text-primary-foreground bg-primary px-6 py-3 rounded-md font-semibold group-hover:bg-primary-hover transition-colors">Scopri →</span>
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default FeaturedCollections;