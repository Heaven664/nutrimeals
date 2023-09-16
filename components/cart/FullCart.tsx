import { CartProductType } from "@/lib/interfaces";
import CartItems from "./CartItems";
import styles from "./FullCart.module.css";

interface P {
  products: CartProductType[];
}

const FullCart = ({ products }: P) => {
  return (
    <div className={styles.FullCartLayout}>
      <div className={styles.FullCartBody}>
        <CartItems products={products} />
      </div>
    </div>
  );
};

export default FullCart;
