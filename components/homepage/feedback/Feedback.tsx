import { JSX } from "react";

import styles from "./Feedback.module.css";

const FeedbackCarousel = (): JSX.Element => {
  return (
    <div className={styles.feedbackLayout}>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackTitleContainer}>
          <h3>Healthy meal prep Loved by Locals</h3>
        </div>
        <div className={styles.feedbackBodyContainer}>
          <p>Read what our customers have to say</p>
        </div>
        <div className={styles.feedbackCarouser}>Carousel</div>
        <div className={styles.feedbackButton}>
          <button>Perfect, I want it</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;


