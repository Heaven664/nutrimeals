import { JSX } from "react";

import styles from "./Preview.module.css";

const Preview = (): JSX.Element => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.videoContainer}>
        <iframe src="https://www.youtube.com/embed/hGc_258GUtg?autoplay=1&mute=1&controls=0&disablekb=1&playlist=hGc_258GUtg&loop=1&"></iframe>
      </div>
    </div>
  );
};

export default Preview;
// https://www.youtube.com/embed/hGc_258GUtg?autoplay=1&autohide=1&modestbranding=0&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&hd=1&mute=1&origin=https%3A%2F%2Fnutrimeals.ca&widgetid=1
