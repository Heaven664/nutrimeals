import Link from "next/link";
import { useRouter } from "next/router";
import { CartProductType } from "@/lib/interfaces";
import styles from "./CartItems.module.css";

interface P {
  products: CartProductType[];
}

const CartItems = ({ products }: P) => {
  const router = useRouter();

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
          <input type="number" value={product.quantity} />
        </div>
        <div className={styles.productTotalPriceContainer}>
          <p>${product.price * product.quantity}</p>
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
    </div>
  );
};

export default CartItems;
