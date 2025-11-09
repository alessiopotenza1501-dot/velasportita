import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.node.variants.edges[0]?.node);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
      position: "top-center",
    });
  };

  const imageUrl = product.node.images.edges[0]?.node.url;
  const price = parseFloat(selectedVariant?.price.amount || product.node.priceRange.minVariantPrice.amount);
  const currency = selectedVariant?.price.currencyCode || product.node.priceRange.minVariantPrice.currencyCode;

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale">
      <Link to={`/product/${product.node.handle}`} className="block">
        <div className="relative overflow-hidden bg-secondary aspect-square">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.node.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/product/${product.node.handle}`}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2 hover:text-primary transition-colors">
            {product.node.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.node.description}
        </p>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">
            {currency} {price.toFixed(2)}
          </p>
          <Button 
            size="sm" 
            variant="default" 
            className="gap-2"
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
