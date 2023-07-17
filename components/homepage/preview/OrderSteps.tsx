import { JSX } from "react";
import Image from "next/image";

import styles from "./orderSteps.module.css";

const OrderSteps = (): JSX.Element => {
  return (
    <div className={styles.stepsLayout}>
      <div className={styles.allSteps}>
        <ul>
          <li>
            <div className={styles.stepContainer}>
              <div className={styles.stepImageContainer}>
                <div className={styles.image}>
                  <Image
                    alt="step1"
                    width={100}
                    height={100}
                    src={"/images/homepage/steps/step1.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Choose Meals</h3>
                <p>Individual or subscription</p>
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
                    src={"/images/homepage/steps/step2.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Pick A Day</h3>
                <p>For your delivery</p>
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
                    src={"/images/homepage/steps/step3.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Free Meal Delivery In Alberta</h3>
                <p>On orders over $150</p>
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
                    src={"/images/homepage/steps/step4.png"}
                  />
                </div>
              </div>
              <div className={styles.stepTextContainer}>
                <h3>Effortless Prepared Meals</h3>
                <p>Easy peasy</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSteps;
