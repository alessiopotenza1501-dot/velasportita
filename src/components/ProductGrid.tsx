import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  query?: string;
  limit?: number;
}

export const ProductGrid = ({ query, limit = 20 }: ProductGridProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(limit, query);
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [query, limit]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-heading font-bold mb-4">No products found</h3>
        <p className="text-muted-foreground mb-6">
          We don't have any products yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </div>
  );
};
