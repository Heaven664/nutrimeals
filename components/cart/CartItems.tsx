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
    </div>
  );
};

export default CartItems;
