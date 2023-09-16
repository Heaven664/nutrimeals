import Link from "next/link";
import { CartProductType } from "@/lib/interfaces";
import styles from "./CartItems.module.css";

interface P {
  products: CartProductType[];
}

const CartItems = ({ products }: P) => {
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
          <div className={styles.productPreview}>
            <p>Product</p>
          </div>
          <div className={styles.productPrice}>
            <p>Price</p>
          </div>
          <div className={styles.productQuantity}>
            <p>Quantity</p>
          </div>
          <div className={styles.productTotalPrice}>
            <p>Total</p>
          </div>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default CartItems;
