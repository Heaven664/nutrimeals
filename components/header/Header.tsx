import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BurgerMenuOpen from "./BurgerClosed";
import BurgerMenuClosed from "./BurgerOpened";

import styles from "./Header.module.css";
import UserToolsList from "./UserToolsList";
import Navbar from "./Navbar/Navbar";
import DesktopTools from "./DesktopTools";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const menuChangeHandler = () => {
    setMobileMenuStatus((prev) => !prev);
  };

  return (
    <header>
      <div className={styles.salesAlert}>
        <p>
          Free delivery with 8+ meals in Calgary & 10+ meals outside of Calgary.
          Phone: 587-834-0231
        </p>
      </div>
      <div className={styles.headerContainer}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/images/nutrimeals-logo.webp"
              alt="nutrimeals-logo"
              width={200}
              height={200}
            />
          </div>
        </Link>
        <div className={styles.desktopToolsContainer}>
          <DesktopTools />
        </div>
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
      <Navbar navbarActive={mobileMenuStatus} hideNavbar={() => setMobileMenuStatus(false)}/>
    </header>
  );
};

export default Header;
