import { JSX } from "react";
import styles from "../navbar.module.css";

interface ExtendedProps {
  extendedNavbar: number;
  extendNavbarHandler: (arg0: number) => void;
}

const MealPlans = ({
  extendedNavbar,
  extendNavbarHandler,
}: ExtendedProps): JSX.Element => {
  return (
    <ul
      className={`${styles.utilityNavbar} ${
        extendedNavbar === 3
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
            <strong>Meal Plans</strong>
          </span>
        </button>
      </li>
      <li>
        <button>
          <span>Information</span>
        </button>
      </li>
      <li>
        <button>
          <span>Dietitian consultation</span>
        </button>
      </li>
    </ul>
  );
};

export default MealPlans;
