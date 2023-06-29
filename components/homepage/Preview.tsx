import { JSX } from "react";

import styles from "./Preview.module.css";

const Preview = (): JSX.Element => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.secDiv}>
        <div className={styles.videoContainer}>
          <iframe src="https://www.youtube.com/embed/hGc_258GUtg?autoplay=1&mute=1&controls=0&disablekb=1&playlist=hGc_258GUtg&loop=1&" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
