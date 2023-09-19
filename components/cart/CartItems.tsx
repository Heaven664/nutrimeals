import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import MealsContext from "@/store/MealsContext";
import { CartProductType } from "@/lib/interfaces";
import styles from "./CartItems.module.css";

interface P {
  products: CartProductType[];
}

const CartItems = ({ products }: P) => {
  const cartCtx = useContext(MealsContext);
  const { changeCartItems, cartItems } = cartCtx;
  const router = useRouter();
  const [subtotal, setSubtotal] = useState(
    products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  );
  const [productQuantities, setProductQuantities] = useState(
    products.map((product) => ({
      title: product.title,
      quantity: product.quantity,
    }))
  );
  const [productsTotalPrices, setProductsTotalPrices] = useState(
    products.map((product) => ({
      price: product.price,
      title: product.title,
      totalPrice: product.price * product.quantity,
    }))
  );

  // const handleQuantityChange = (productId: string, newQuantity: number) => {
  //   setProductQuantities((prev) =>
  //     prev.map((item) =>
  //       item.id === productId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  //   setProductsTotalPrices((prev) =>
  //     prev.map((item) =>
  //       item.id === productId
  //         ? { ...item, totalPrice: newQuantity * item.price }
  //         : item
  //     )
  //   );
  // };

  const handleQuantityChange = (productTitle: string, newQuantity: number) => {
    const newCartItems = cartItems.map((item) =>
      item.title === productTitle
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price,
          }
        : item
    );
    changeCartItems(newCartItems);
    // updateCart(newCartItems);
    // setProductQuantities((prev) =>
    //   prev.map((item) =>
    //     item.title === productTitle ? { ...item, quantity: newQuantity } : item
    //   )
    // );
    // setProductsTotalPrices((prev) =>
    //   prev.map((item) =>
    //     item.title === productTitle
    //       ? { ...item, totalPrice: newQuantity * item.price }
    //       : item
    //   )
    // );
  };

  useEffect(() => {
    setSubtotal(
      cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    );
    setProductQuantities(
      cartItems.map((item) => ({ title: item.title, quantity: item.quantity }))
    );
    setProductsTotalPrices(
      cartItems.map((item) => ({
        title: item.title,
        price: item.price,
        totalPrice: item.price * item.quantity,
      }))
    );
  }, [cartItems]);

  const productItems = products.map((product) => (
    <li key={product.image}>
      <div className={styles.productLeftInfo}>
        <div
          className={
            product.beverageContainer
              ? styles.imageBeverageContainer
              : styles.imageContainer
          }
          onClick={() => router.push(`/products/${product.slug}`)}
        >
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productTitleContainer}>
          <h4 onClick={() => router.push(`/products/${product.slug}`)}>
            {product.title}
          </h4>
          <p
            onClick={() => {
              let newCart = products.filter(
                (item) => item.title !== product.title
              );
              changeCartItems(newCart);
              // updateCart(newCart);
            }}
          >
            Remove
          </p>
        </div>
      </div>
      <div className={styles.productRightInfo}>
        <div className={styles.productPriceContainer}>
          <p>${product.price}</p>
        </div>
        <div className={styles.productQuantityContainer}>
          <div className={styles.productQuantity}>
            <p>Qty</p>
          </div>
          <input
            type="number"
            value={
              productQuantities.find((item) => item.title === product.title)
                ?.quantity
            }
            onChange={(e) =>
              handleQuantityChange(product.title, parseInt(e.target.value))
            }
            min={1}
          />
        </div>
        <div className={styles.productTotalPriceContainer}>
          <p>
            $
            {productsTotalPrices
              .find((item) => item.title === product.title)
              ?.totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <div className={styles.CartItemsBody}>
      <div className={styles.cartHeader}>
        <h1>Your cart</h1>
        <Link href="/">
          <p>Continue shopping</p>
        </Link>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.cartItemsHeaders}>
          <div className={styles.productPreviewColumn}>
            <p>Product</p>
          </div>
          <div className={styles.productPriceColumn}>
            <p>Price</p>
          </div>
          <div className={styles.productQuantityColumn}>
            <p>Quantity</p>
          </div>
          <div className={styles.productTotalPriceColumn}>
            <p>Total</p>
          </div>
        </div>
        <ul>{productItems}</ul>
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.subtotalContainer}>
          <p>
            Subtotal: <span>{`$${subtotal.toFixed(2)} CAD`}</span>
          </p>
        </div>
        <button>Check out</button>
      </div>
    </div>
  );
};

export default CartItems;
