import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BurgerMenuOpen from "./BurgerClosed";
import BurgerMenuClosed from "./BurgerOpened";

import styles from "./Header.module.css";
import UserToolsList from "./UserToolsList";
import Navbar from "./Navbar/Navbar";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const menuChangeHandler = () => {
    setMobileMenuStatus((prev) => !prev);
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href="">
          <div className={styles.logoContainer}>
            <Image
              src="/images/nutrimeals-logo.webp"
              alt="nutrimeals-logo"
              width={200}
              height={200}
            />
          </div>
        </Link>
        <div className={styles.tools}>
          <UserToolsList />
          <button
            className={styles.burgerContainer}
            onClick={menuChangeHandler}
          >
            {mobileMenuStatus ? <BurgerMenuOpen /> : <BurgerMenuClosed />}
          </button>
        </div>
      </div>
      <Navbar navbarActive={mobileMenuStatus} />
    </header>
  );
};

export default Header;
