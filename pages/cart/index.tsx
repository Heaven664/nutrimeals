import EmptyCart from "@/components/cart/EmptyCart";
import FullCart from "@/components/cart/FullCart";
import { useContext, useEffect } from "react";
import MealsContext from "@/store/MealsContext";

const Cart = () => {
  const itemsCtx = useContext(MealsContext);
  const { changeCartItems } = itemsCtx;

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

  useEffect(() => {
    changeCartItems(products);
    console.log('set')
  }, []);

  return (
    <>
      {products.length === 0 ? <EmptyCart /> : <FullCart products={products} />}
    </>
  );
};

export default Cart;
