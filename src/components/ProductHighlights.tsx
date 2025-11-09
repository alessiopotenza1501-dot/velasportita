import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import productMen1 from "@/assets/product-men-1.jpg";
import productWomen1 from "@/assets/product-women-1.jpg";
import productMen2 from "@/assets/product-men-2.jpg";
import productWomen2 from "@/assets/product-women-2.jpg";

const products = [
  {
    id: 1,
    name: "Velocity Runner",
    category: "Men's",
    price: "€149.99",
    image: productMen1,
  },
  {
    id: 2,
    name: "Grace Sprint",
    category: "Women's",
    price: "€139.99",
    image: productWomen1,
  },
  {
    id: 3,
    name: "Performance Elite",
    category: "Men's",
    price: "€169.99",
    image: productMen2,
  },
  {
    id: 4,
    name: "Athena Style",
    category: "Women's",
    price: "€129.99",
    image: productWomen2,
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Bestsellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved shoes, chosen by athletes and style enthusiasts worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="relative overflow-hidden bg-secondary aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-foreground">{product.price}</p>
                  <Button size="sm" variant="default" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
