import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartProductType } from "@/lib/interfaces";
import styles from "./CartItems.module.css";

interface P {
  products: CartProductType[];
}

const CartItems = ({ products }: P) => {
  const router = useRouter();
  const [subtotal, setSubtotal] = useState(0);
  const [productQuantities, setProductQuantities] = useState(
    products.map((product) => ({
      id: product.slug,
      quantity: product.quantity,
    }))
  );
  const [productsTotalPrices, setProductsTotalPrices] = useState(
    products.map((product) => ({
      price: product.price,
      id: product.slug,
      totalPrice: product.price * product.quantity,
    }))
  );
  useEffect(() => {
    let sum = 0;
    products.map((product) => (sum += product.price * product.quantity));
    setSubtotal(sum);
  }, [products]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProductQuantities((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    setProductsTotalPrices((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, totalPrice: newQuantity * item.price }
          : item
      )
    );
  };

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
          <p>Remove</p>
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
              productQuantities.find((item) => item.id === product.slug)
                ?.quantity
            }
            onChange={(e) =>
              handleQuantityChange(product.slug, parseInt(e.target.value))
            }
            min={1}
          />
        </div>
        <div className={styles.productTotalPriceContainer}>
          <p>
            $
            {productsTotalPrices
              .find((item) => item.id === product.slug)
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
            Subtotal: <span>{`$${subtotal} CAD`}</span>
          </p>
        </div>
        <button>Check out</button>
      </div>
    </div>
  );
};

export default CartItems;
