import EmptyCart from "@/components/cart/EmptyCart";
import FullCart from "@/components/cart/FullCart";

const Cart = () => {
  let emptyCart = false;
  const products = [
    {
      title: "Breakfast Bowl",
      quantity: 1,
      slug: "breakfast-bowl",
      price: 13.99,
      image: "/images/collections/aloha-chicken.webp",
      beverageContainer: false,
    },
    {
      title: "Blackened Cod",
      slug: "blackened-cod",
      quantity: 2,
      price: 13.99,
      image: "/images/collections/blackened-cod.webp",
      beverageContainer: false,
    },
    {
      title: "SPEACHLESS Rviita Tea",
      slug: "speachless-rviita-tea",
      quantity: 2,
      price: 4.99,
      image: "/images/collections/speachless-rviita-tea.webp",
      beverageContainer: true,
    },
  ];
  return <>{emptyCart ? <EmptyCart /> : <FullCart products={products} />}</>;
};

export default Cart;
