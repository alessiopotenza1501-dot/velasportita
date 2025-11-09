import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useCartStore(state => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => {
        // This will be handled by the CartDrawer in the header
        const cartTrigger = document.querySelector('[aria-label="Cart"]') as HTMLButtonElement;
        if (cartTrigger) cartTrigger.click();
      }}
      className="fixed bottom-6 right-6 md:hidden bg-primary text-primary-foreground rounded-full p-4 shadow-2xl hover:bg-primary-hover transition-all z-50 hover:scale-110"
      aria-label="View Cart"
    >
      <ShoppingCart className="h-6 w-6" />
      <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
        {totalItems}
      </Badge>
    </button>
  );
};
