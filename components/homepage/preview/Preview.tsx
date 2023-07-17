import { JSX } from "react";
import Link from "next/link";

import styles from "./Preview.module.css";

const Preview = (): JSX.Element => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <iframe src="https://www.youtube.com/embed/hGc_258GUtg?autoplay=1&mute=1&controls=0&disablekb=1&playlist=hGc_258GUtg&loop=1&" />
        </div>
        <div className={styles.videoOverlay}>
          <h1>Healthy &#38; Ready to Eat Meals Delivered</h1>
          <h2>
            The Benefits of Healthy Meal Prep: Save Time and Eat Healthier
          </h2>
          <div className={styles.buttonContainer}>
            <Link href="">
              <button>View Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
