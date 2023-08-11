import Image from "next/image";

import styles from "../homepage/info/SubscriptionInfo.module.css";
import KioskForm from "./KioskForm";

const VisitKiosk = () => {
  return (
    <div className={styles.infoLayout}>
      <div className={styles.infoContainer} id={styles.kioskInfoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>
            <h2>COME VISIT OUR MACHINE</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              Learn more about our fresh food vending machines, and our healthy
              ready to eat meals! We have a fresh food vending machine available
              for a demo and use at our showroom in
              <strong> Calgary Alberta.</strong> If you're interested in
              scheduling a demo, please send us an email and we would be happy
              to work with you!
            </p>
          </div>
          <KioskForm />
        </div>
        <div className={styles.imageContainer} id={styles.kioskImageContainer}>
          <Image
            src="/images/kiosks/visit-kiosk.png"
            width={750}
            height={750}
            alt="subscription-info"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitKiosk;
