import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart() {
    const { addItem, handleCartClick } = useShoppingCart();
    return (
        <Button>
            Add to Cart
        </Button>
    )
}