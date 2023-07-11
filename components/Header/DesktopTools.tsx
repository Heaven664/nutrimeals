import { useState } from "react";
import styles from "./DesktopTools.module.css";

const DesktopTools: React.FC = () => {
  const [openTools, setOpenTools] = useState(0);

  const handleExtendedTools = (toolNumber: number) => {
    console.log(toolNumber);
    console.log(openTools);
    if (openTools === toolNumber) {
      return setOpenTools(0);
    }
    setOpenTools(toolNumber);
  };

  return (
    <ul className={styles.toolsList}>
      <li onClick={() => handleExtendedTools(1)}>
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
                  <p>Lunch & Dinner</p>
                </li>
                <li>
                  <p>Breakfast</p>
                </li>
                <li>
                  <p>Build Your Own Meal</p>
                </li>
                <li>
                  <p>Beverages</p>
                </li>
                <li>
                  <p>Snacks</p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleExtendedTools(2)}>
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
                  <p>Lunch & Dinner</p>
                </li>
                <li>
                  <p>Breakfast</p>
                </li>
                <li>
                  <p>Build Your Own Meal</p>
                </li>
                <li>
                  <p>Beverages</p>
                </li>
                <li>
                  <p>Snacks</p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleExtendedTools(3)}>
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
                  <p>Lunch & Dinner</p>
                </li>
                <li>
                  <p>Breakfast</p>
                </li>
                <li>
                  <p>Build Your Own Meal</p>
                </li>
                <li>
                  <p>Beverages</p>
                </li>
                <li>
                  <p>Snacks</p>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
      <li onClick={() => handleExtendedTools(4)}>
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
                  <p>Lunch & Dinner</p>
                </li>
                <li>
                  <p>Breakfast</p>
                </li>
                <li>
                  <p>Build Your Own Meal</p>
                </li>
                <li>
                  <p>Beverages</p>
                </li>
                <li>
                  <p>Snacks</p>
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
          <p>Merchandise</p>
        </div>
      </li>
      <li>
        <div className={styles.toolContainer}>
          <p>Gift Card</p>
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
