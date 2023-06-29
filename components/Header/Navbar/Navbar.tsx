import { JSX } from "react";

import styles from "./Navbar.module.css";

interface NavbarStatus {
  navbarActive: boolean;
}

const Navbar = ({ navbarActive }: NavbarStatus): JSX.Element => {
  return (
    <nav className={`${styles.nav} ${navbarActive ? `${styles.active}` : ""}`}>
      <ul>
        <li>
          <button>
            <span>Individual Meals</span>
            <div className={styles.extend}>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 14 14"
              >
                <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z"></path>
              </svg>
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>Subscription Boxes</span>
            <div className={styles.extend}>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 14 14"
              >
                <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z"></path>
              </svg>
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>Meal Plans</span>
            <div className={styles.extend}>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 14 14"
              >
                <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z"></path>
              </svg>
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>Merchandise</span>
            <div className={styles.extend}>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 14 14"
              >
                <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z"></path>
              </svg>
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>Gift Card</span>
          </button>
        </li>
        <li>
          <button>
            <span>Automated Kiosks</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
