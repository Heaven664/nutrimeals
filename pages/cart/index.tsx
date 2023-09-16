import EmptyCart from "@/components/cart/EmptyCart";
import FullCart from "@/components/cart/FullCart";

const Cart = () => {
  let emptyCart = false;
  return <>{emptyCart ? <EmptyCart /> : <FullCart />}</>;
};

export default Cart;
