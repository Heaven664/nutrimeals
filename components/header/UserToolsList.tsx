import { JSX, useEffect, useState } from "react";
import { getCart } from "@/helpers/helpers";
import Link from "next/link";
import styles from "./UserToolsList.module.css";
import { useContext } from "react";
import MealsContext from "@/store/MealsContext";

const UserToolsList = (): JSX.Element => {
  const itemsCtx = useContext(MealsContext);

  const { cartItems } = itemsCtx;
  const [cartItemsNumber, setCartItemsNumber] = useState(
    cartItems.reduce((acc, cur) => {
      if (!Number.isNaN(cur.quantity)) {
        return acc + cur.quantity;
      } else {
        return acc + 1;
      }
    }, 0)
  );

  useEffect(() => {
    setCartItemsNumber(
      cartItems.reduce((acc, cur) => {
        if (cur.quantity) {
          return acc + cur.quantity;
        } else {
          return acc + 1;
        }
      }, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    const cartItems = getCart();
    setCartItemsNumber(
      cartItems.reduce((acc, cur) => {
        if (cur.quantity) {
          return acc + cur.quantity;
        }
        return acc + 1;
      }, 0)
    );
  }, []);

  return (
    <ul>
      {" "}
      <li>
        <Link href="">
          <svg viewBox="0 0 37 40">
            <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
          </svg>
        </Link>
      </li>
      <li>
        <Link href="">
          <svg viewBox="0 0 28.33 37.68">
            <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
          </svg>
        </Link>
      </li>
      <li id={styles.cartIconContainer}>
        <Link href="/cart">
          <div className={styles.cartIcon}>
            <svg viewBox="0 0 37 40">
              <path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
            </svg>
          </div>
          <div className={styles.cartItemsAmount}>{cartItemsNumber}</div>
        </Link>
      </li>
    </ul>
  );
};

export default UserToolsList;
