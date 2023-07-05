import Image from "next/image";

import styles from "./MenuInfo.module.css";

const WasteInfo = () => {
  return (
    <div className={styles.infoLayout}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/homepage/waste-info.png"
            width={750}
            height={750}
            alt="waste-info"
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>
            <h2>A LOW WASTE APPROACH</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              One of our main goals is to keep food waste low. Food waste has a
              major impact on the environment, and we all need to do our part.
              That is why we need your order so far in advance! It allows our
              team to <strong>calculate</strong> what ingredients are needed for
              each day, keeping food waste low!
            </p>
            <p>
              We use fresh, local ingredients to ensure you receive the best
              quality meals. When we do have any ingredients left over, we
              <strong> donate</strong> them to the leftovers foundation to
              redirect them to the communities in need.
            </p>
          </div>
          <div className={styles.textButton}></div>
        </div>
      </div>
    </div>
  );
};

export default WasteInfo;
