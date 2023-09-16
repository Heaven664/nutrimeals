import EmptyCart from "@/components/cart/EmptyCart";
import FullCart from "@/components/cart/FullCart";

const Cart = () => {
  let emptyCart = false;
  const products = [
    {
      title: "Breakfast Bowl",
      quantity: 1,
      price: 13.99,
      image: "/images/aloha-chicken.webp",
      beverageContainer: false,
    },
    {
      title: "Breakfast Bowl",
      quantity: 1,
      price: 13.99,
      image: "/images/aloha-chicken.webp",
      beverageContainer: false,
    },
  ];
  return <>{emptyCart ? <EmptyCart /> : <FullCart products={products} />}</>;
};

export default Cart;
