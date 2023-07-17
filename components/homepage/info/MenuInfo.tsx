import Image from "next/image";

import styles from "./menuInfo.module.css";

const MenuInfo = () => {
  return (
    <div className={styles.infoLayout}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/homepage/menu-info.png"
            width={750}
            height={750}
            alt="menu-info"
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>
            <h2>A menu that changes every 2 weeks</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              Eating healthy with Nutrimeals is <strong>EXCITING!</strong> Our
              menu changes every 2 weeks so that you never get tired of eating
              the same thing over and over.
            </p>
            <p>
              Choose from a variety of different breakfasts, lunches and dinners
              and never worry about your meal prep again!
            </p>
          </div>
          <div className={styles.textButton}>
            <button>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
