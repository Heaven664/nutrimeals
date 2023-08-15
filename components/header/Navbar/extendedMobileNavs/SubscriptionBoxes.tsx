import { JSX } from "react";
import Link from "next/link";
import styles from "../Navbar.module.css";

interface ExtendedProps {
  extendedNavbar: number;
  extendNavbarHandler: (arg0: number) => void;
  hideNavbar: any;
}

const SubscriptionBoxes = ({
  extendedNavbar,
  extendNavbarHandler,
  hideNavbar,
}: ExtendedProps): JSX.Element => {
  return (
    <ul
      className={`${styles.utilityNavbar} ${
        extendedNavbar === 2
          ? `${styles.utilityOpened}`
          : `${styles.utilityClosed}`
      }`}
    >
      <li>
        <button>
          <div className={styles.hide} onClick={() => extendNavbarHandler(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
          <span>
            <strong>Subscription Boxes</strong>
          </span>
        </button>
      </li>
      <li>
        <button onClick={hideNavbar}>
          <span>Breakfast & Lunch Box</span>
        </button>
      </li>
      <li>
        <button onClick={hideNavbar}>
          <span>Breakfast, Lunch, & Dinner Box</span>
        </button>
      </li>
      <li>
        <button onClick={hideNavbar}>
          <span>Lunch & Dinner Box</span>
        </button>
      </li>
      <li>
        <button onClick={hideNavbar}>
          <span>Gluten Free Box</span>
        </button>
      </li>
      <li>
        <button onClick={hideNavbar}>
          <Link href="/products/dairy-free-lunch-&-dinner">
            <span>Dairy Free Box</span>
          </Link>
        </button>
      </li>
    </ul>
  );
};

export default SubscriptionBoxes;
