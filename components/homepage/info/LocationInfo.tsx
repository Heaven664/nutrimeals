import MapComponent from "./MapComponent";

import styles from "./LocationInfo.module.css";

const LocationInfo = () => {
  return (
    <div className={styles.infoLayout}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <div className="google-map-container">
          <MapComponent />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>
            <h2>Come Visit Our Fresh Food Vending Machine!</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              Did you forget to meal prep, or need a fresh healthy meal on the
              go? We have delicious meals that are ready to purchase from our
              fresh food vending machine.
            </p>
            <p>
              Conveniently located to your favorite near-by stores, Nutrimeals
              vending machine is a great and contactless way to buy meal prep!
            </p>
            <p>
              Fresh food vending machine is located in our showroom at 610B 70
              Ave SE Calgary AB. <br /> We are open: <br /> Monday-Friday
              9am-5pm <br /> Saturday & Sunday 10am-3pm
            </p>
          </div>
          <div className={styles.textButton}></div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
