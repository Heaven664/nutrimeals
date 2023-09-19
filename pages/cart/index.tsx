import EmptyCart from "@/components/cart/EmptyCart";
import FullCart from "@/components/cart/FullCart";
import { useContext, useEffect, useState } from "react";
import MealsContext from "@/store/MealsContext";
import { getCart, updateCart } from "@/helpers/helpers";
import { CartProductType } from "@/lib/interfaces";

const Cart = () => {
  const [products, setProducts] = useState<CartProductType[]>([]);
  const itemsCtx = useContext(MealsContext);
  const { changeCartItems, cartItems } = itemsCtx;

  useEffect(() => {
    setProducts(cartItems);
  }, [cartItems]);

  useEffect(() => {
    const cartItems = getCart();
    setProducts(cartItems);
    changeCartItems(cartItems);
  }, []);

  return (
    <>
      {products.length === 0 ? <EmptyCart /> : <FullCart products={products} />}
    </>
  );
};

export default Cart;
