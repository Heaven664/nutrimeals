import Image from "next/image";

import styles from "./Faq.module.css";

const Faq: React.FC = () => {
  return (
    <div className={styles.faqLayout}>
      <div className={styles.faqDataContainer}>
        <div className={styles.faqTitle}>
          <h3>Questions & Answers</h3>
        </div>
        <div className={styles.faqSubTitle}>
          <p>information hub</p>
        </div>
        <div className={styles.faqQuestionsContainer}>
          <p>FAQ</p>
        </div>
        <div className={styles.faqFooter}>
          <p>Have a question?</p>
          <button>View FAQ</button>
        </div>
      </div>
      <div className={styles.faqImagesContainer}>
        <div className={styles.faqImagesBody}>
          <div className={styles.firstImageContainer}>
            <Image
              alt="first-faq-image"
              width={1024}
              height={683}
              src="/images/homepage/faq/faq-1.jpeg"
            />
          </div>
          <div className={styles.imageDataContainer}>
            <p className={styles.contact}>
              Contact <br />(587) 834-0231
            </p>
            <p className={styles.mail}>contact@nutrimeals.ca</p>
          </div>
          <div className={styles.secondImageContainer}>
            <Image
              alt="second-faq-image"
              width={750}
              height={750}
              src="/images/homepage/faq/faq-2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
