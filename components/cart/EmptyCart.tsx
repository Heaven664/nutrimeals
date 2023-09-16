import styles from "./EmptyCart.module.css";
import { useRouter } from "next/router";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.cartLayout}>
        <div className={styles.cartBody}>
          <h1>Your cart</h1>
          <p>Your cart is currently empty</p>
          <div className={styles.buttonContainer}>
            <button onClick={() => router.push("/")}>
              continue shopping
              <svg height="1rem" viewBox="0 0 20 8">
                <path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
