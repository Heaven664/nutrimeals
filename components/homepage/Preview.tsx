import { JSX } from "react";

import styles from "./Preview.module.css";

const Preview = (): JSX.Element => {
  return (
    <div className={styles.videoContainer}>
      <iframe src="https://www.youtube.com/embed/hGc_258GUtg?controls=0&autoplay=1&mute=1&playsinline=1"></iframe>
    </div>
  );
};

export default Preview;
