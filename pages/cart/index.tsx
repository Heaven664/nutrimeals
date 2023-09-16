import EmptyCart from "@/components/cart/EmptyCart";

const Cart = () => {
  let emptyCart = true;
  return <>{emptyCart ? <EmptyCart /> : <div>not empty</div>}</>;
};

export default Cart;
