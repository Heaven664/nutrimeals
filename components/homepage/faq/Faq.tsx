import { useState } from "react";
import Image from "next/image";

import styles from "./Faq.module.css";

const Faq: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleFaqChange = (faqNumber: number) => {
    if (activeQuestion === faqNumber) {
      return setActiveQuestion(0);
    }
    setActiveQuestion(0);
    setActiveQuestion(faqNumber);
  };

  return (
    <div className={styles.faqLayout}>
      <div className={styles.faqContainer}>
        <div className={styles.faqDataContainer}>
          <div className={styles.faqTitle}>
            <h3>Questions & Answers</h3>
          </div>
          <div className={styles.faqSubTitle}>
            <p>information hub</p>
          </div>
          <div className={styles.faqQuestionsContainer}>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(1)}
            >
              <p>When will my healthy meal prep be delivered?</p>
              <div className={styles.arrowContainer}>
                {activeQuestion === 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`${styles.hiddenAnswer} ${
                activeQuestion === 1 ? "" : styles.active
              }`}
            >
              <p>
                You will pick a date for your delivery before you get to the
                checkout. We will only deliver on the day that has been selected
                on the calendar.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(2)}
            >
              <p>When will my healthy meal prep be delivered?</p>
              <div className={styles.arrowContainer}>
                {activeQuestion === 2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`${styles.hiddenAnswer} ${
                activeQuestion === 2 ? "" : styles.active
              }`}
            >
              <p>
                You will pick a date for your delivery before you get to the
                checkout. We will only deliver on the day that has been selected
                on the calendar.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(3)}
            >
              <p>When will my healthy meal prep be delivered?</p>
              <div className={styles.arrowContainer}>
                {activeQuestion === 3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`${styles.hiddenAnswer} ${
                activeQuestion === 3 ? "" : styles.active
              }`}
            >
              <p>
                You will pick a date for your delivery before you get to the
                checkout. We will only deliver on the day that has been selected
                on the calendar.
              </p>
            </div>
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
                Contact <br />
                (587) 834-0231
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
    </div>
  );
};

export default Faq;
