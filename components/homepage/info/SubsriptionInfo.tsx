import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./SubscriptionInfo.module.css";

const SubscriptionInfo = () => {
  const router = useRouter();
  return (
    <div className={styles.infoLayout}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>
            <h2>MEAL PREP SUBSCRIPTION BOXES</h2>
          </div>
          <div className={styles.textBody}>
            <p>
              Subscribe and save to Nutrimeals
              <strong> meal prep subscription boxes! </strong>
              Easy and hassle free meal prep. Zero commitment, you can pause or
              skip a delivery any time!
            </p>
            <p>
              Tell us your eating preferences and our team will select meals for
              your meal prep subscription box. A true set it and forget it
              subscription that you and your taste buds will
              <strong> LOVE!</strong>
            </p>
          </div>
          <div className={styles.textButton}>
            <button onClick={() => router.push("/products/lunch-&-dinner-box")}>
              View Subscriptions
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/homepage/subscriptions-info.png"
            width={750}
            height={750}
            alt="subscription-info"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
