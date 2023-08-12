import styles from "./KioskVideo.module.css";

const KioskVideo = () => {
  return (
    <div className={styles.componentLayout}>
      <div className={styles.componentContainer}>
        <div className={styles.titleContainer}>
          <h2>FRESH FOOD VENDING MACHINE: WATCH HOW IT WORKS</h2>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/QNKl_Zjychk?controls=0&modestbranding=1"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KioskVideo;
