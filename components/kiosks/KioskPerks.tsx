import { JSX } from "react";
import Image from "next/image";

import styles from "../homepage/preview/OrderSteps.module.css";

const KioskPerks = (): JSX.Element => {
  return (
    <div className={styles.stepsLayout}>
      <div className={styles.allSteps} id={styles.allPerks}>
        <ul id={styles.kioskPerksList}>
          <li>
            <div className={styles.stepContainer}>
              <div className={styles.stepImageContainer}>
                <div className={styles.image}>
                  <Image
                    alt="step1"
                    width={100}
                    height={100}
                    src={"/images/kiosks/perk-1.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>24/7 Accessibility</h3>
                <p>Un-manned kiosk</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.stepContainer}>
              <div className={styles.stepImageContainer}>
                <div className={styles.image}>
                  <Image
                    alt="step1"
                    width={100}
                    height={100}
                    src={"/images/kiosks/perk-2.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Healthy And Delicious</h3>
                <p>Fresh and healthy meals</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.stepContainer}>
              <div className={styles.stepImageContainer}>
                <div className={styles.image}>
                  <Image
                    alt="step1"
                    width={100}
                    height={100}
                    src={"/images/kiosks/perk-3.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Recyclable Packaging</h3>
                <p>Rinse and recycle</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.stepContainer}>
              <div className={styles.stepImageContainer}>
                <div className={styles.image}>
                  <Image
                    alt="step1"
                    width={100}
                    height={100}
                    src={"/images/kiosks/perk-4.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Unique Tenant Amenity</h3>
                <p>Different from the rest</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KioskPerks;
