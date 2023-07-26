import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import styles from "./DesktopTools.module.css";

const DesktopTools: React.FC = () => {
  const [openTools, setOpenTools] = useState(0);
  const toolsRef = useRef<HTMLUListElement>(null);

  const handleClickInside = (toolNumber: number) => {
    if (openTools === toolNumber) {
      return setOpenTools(0);
    }
    setOpenTools(toolNumber);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
      setOpenTools(0);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul className={styles.toolsList} ref={toolsRef}>
      <li onClick={() => handleClickInside(1)}>
        <div className={styles.toolContainer}>
          <p>Individual Meals</p>
          <div className={styles.toolExtend}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          {openTools === 1 ? (
            <div className={styles.extendedTools}>
              <ul>
                <li>
                  <Link href="/collections/lunch-and-dinner">
                    <p>Lunch & Dinner</p>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/breakfast">
                    <p>Breakfast</p>
                  </Link>
                </li>
                <li>
                  <p>Build Your Own Meal</p>
                </li>
                <li>
                  <Link href="/collections/beverages">
                    <p>Beverages</p>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/snacks">
                    <p>Snacks</p>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleClickInside(2)}>
        <div className={styles.toolContainer}>
          <p>Subscription Boxes</p>
          <div className={styles.toolExtend}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          {openTools === 2 ? (
            <div className={styles.extendedTools}>
              <ul>
                <li>
                  <p>Breakfast & Lunch Box</p>
                </li>
                <li>
                  <p>Breakfast, Lunch, & Dinner Box</p>
                </li>
                <li>
                  <p>Lunch & Dinner Box</p>
                </li>
                <li>
                  <p>Lunch & Dinner Box</p>
                </li>
                <li>
                  <p>Dairy Free Box</p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleClickInside(3)}>
        <div className={styles.toolContainer}>
          <p>Meal Plans</p>
          <div className={styles.toolExtend}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          {openTools === 3 ? (
            <div className={styles.extendedTools}>
              <ul>
                <li>
                  <p>Information</p>
                </li>
                <li>
                  <p>Dietitian consultation </p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleClickInside(4)}>
        <div className={styles.toolContainer}>
          <p>Bulk Menu</p>
          <div className={styles.toolExtend}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          {openTools === 4 ? (
            <div className={styles.extendedTools}>
              <ul>
                <li>
                  <Link href="/collections/bulk-protein">
                    <p>Protein</p>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/carbohydrates/">
                    <p>Carbohydrates</p>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/bulk-vegetables">
                    <p>Vegetables</p>
                  </Link>
                </li>
                <li>
                  <Link href='/collections/bulk-beverages'>
                  <p>Bulk Beverages</p>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li>
        <div className={styles.toolContainer}>
          <Link href="/collections/merchandise">
            <p>Merchandise</p>
          </Link>
        </div>
      </li>
      <li>
        <div className={styles.toolContainer}>
          <Link href="/collections/gift-cards">
            <p>Gift Card</p>
          </Link>
        </div>
      </li>
      <li>
        <div className={styles.toolContainer}>
          <p>Automated Kiosks</p>
        </div>
      </li>
    </ul>
  );
};

export default DesktopTools;
