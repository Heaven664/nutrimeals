import { JSX, useState } from "react";

import styles from "./Navbar.module.css";
import IndividualMeals from "./extendedMobileNavs/IndividualMeals";
import SubscriptionBoxes from "./extendedMobileNavs/SubscriptionBoxes";
import MealPlans from "./extendedMobileNavs/MealPlans";
import BulkMenu from "./extendedMobileNavs/BulkMenu";

interface NavbarStatus {
  navbarActive: boolean;
  hideNavbar: any;
}

const Navbar = ({ navbarActive, hideNavbar }: NavbarStatus): JSX.Element => {
  const [extendedNavbar, setExtendedNavbar] = useState(0);

  const extendNavbarHandler = (id: number) => {
    if (extendedNavbar === id) {
      return setExtendedNavbar(0);
    }
    setExtendedNavbar(id);
  };

  return (
    <nav
      className={`
      ${styles.nav} 
      ${navbarActive ? `${styles.active}` : ""}
      `}
    >
      <ul
        className={`${styles.mainNavbar} ${
          extendedNavbar !== 0 ? `${styles.hiddenMenu}` : ""
        }
        ${extendedNavbar !== 0 ? `${styles.hiddenMainNavbar}` : ""}
        `}
      >
        <li>
          <button onClick={() => extendNavbarHandler(1)}>
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
          <button onClick={() => extendNavbarHandler(2)}>
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
          <button onClick={() => extendNavbarHandler(3)}>
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
          <button onClick={() => extendNavbarHandler(4)}>
            <span>Bulk Menu</span>
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
          <button onClick={hideNavbar}>
            <span>Merchandise</span>
          </button>
        </li>
        <li>
          <button onClick={hideNavbar}>
            <span>Gift Card</span>
          </button>
        </li>
        <li>
          <button onClick={hideNavbar}>
            <span>Automated Kiosks</span>
          </button>
        </li>
      </ul>
      <IndividualMeals
        extendedNavbar={extendedNavbar}
        extendNavbarHandler={extendNavbarHandler}
        hideNavbar={hideNavbar}
      />
      <SubscriptionBoxes
        extendedNavbar={extendedNavbar}
        extendNavbarHandler={extendNavbarHandler}
        hideNavbar={hideNavbar}
      />
      <MealPlans
        extendedNavbar={extendedNavbar}
        extendNavbarHandler={extendNavbarHandler}
        hideNavbar={hideNavbar}
      />
      <BulkMenu
        extendedNavbar={extendedNavbar}
        extendNavbarHandler={extendNavbarHandler}
        hideNavbar={hideNavbar}
      />
    </nav>
  );
};

export default Navbar;
