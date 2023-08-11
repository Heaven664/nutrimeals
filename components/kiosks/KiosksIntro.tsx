import Image from "next/image";

import styles from "../homepage/info/MenuInfo.module.css";

const KioskInfo = () => {
  return (
    <div className={styles.infoLayout}>
      <div className={styles.kiosksInfoContainer}>
        <div className={styles.kioskInfoImageContainer}>
          <Image
            src="/images/kiosks/kiosks-info.png"
            width={750}
            height={750}
            alt="menu-info"
          />
        </div>
        <div
          className={styles.textContainer}
          id={styles.kioskTextInfoContainer}
        >
          <div className={styles.textTitle}>
            <h2>Fresh Ready to Eat Meals, But in a Vending Machine</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              Nutrimeals' fresh food vending machines are an innovative approach
              to providing convenient and wholesome prepared meals. The kiosks
              are low maintenance and incredibly user friendly.
            </p>
            <p>
              Accessible 24 hours a day, and completely self-serve, the user can
              vend up to three meals in one transaction in less than a minute.
              The meals vend cold and can be re-heated in the nearest microwave.
            </p>
          </div>
          <div className={styles.textButton}>
            <button>Read Full Article</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskInfo;
