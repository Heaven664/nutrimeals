import { useState } from "react";
import Image from "next/image";

import styles from "../homepage/faq/Faq.module.css";

const KioskFaq: React.FC = () => {
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
              <p>Can I implement a vending machine?</p>
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
                activeQuestion === 1 ? "" : styles.hidden
              }`}
            >
              <p>
                Please submit your information in the form below and one of our
                representatives will be in touch!
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(2)}
            >
              <p>What about food safety?</p>
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
                activeQuestion === 2 ? "" : styles.hidden
              }`}
            >
              <p>
                Our kiosks are FDA approved and food safe. The refrigeration
                unit is remotely monitored and will automatically stop vending
                if the unit reaches an unsafe temperature.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(3)}
            >
              <p>How fresh are the meals?</p>
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
                activeQuestion === 3 ? "" : styles.hidden
              }`}
            >
              <p>
                Meal production begins with the freshest ingredients and are
                hand prepared in our commercial kitchen. We transport the
                inventory in refrigerated vehicles to maintain freshness. Each
                kiosk is loaded with a variety of meals that are carefully
                thought out to cater to many different dietary preferences and
                palettes, including but not limited to: vegetarian, gluten free,
                keto, etc. Our menu rotates frequently allowing our customers to
                enjoy a wide range of taste and textures.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(4)}
            >
              <p>
                How long do the meals last, and what happens to the meals that
                do not sell?
              </p>
              <div className={styles.arrowContainer}>
                {activeQuestion === 4 ? (
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
                activeQuestion === 4 ? "" : styles.hidden
              }`}
            >
              <p>
                Our meals have a shelf life of 5 days. However, we recommend
                rotating every 3 days. The un-sold meals are donated to the Left
                Overs Foundation.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(5)}
            >
              <p>Where can I find a vending machine?</p>
              <div className={styles.arrowContainer}>
                {activeQuestion === 5 ? (
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
                activeQuestion === 5 ? "" : styles.hidden
              }`}
            >
              <p>
                Come visit us at our showroom in Calgary! If you would like to
                schedule a demo, please email us.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faqImagesContainer}>
          <div className={styles.faqImagesBody}>
            <div className={styles.firstImageContainer}>
              <Image
                alt="first-faq-image"
                width={1024}
                height={683}
                src="/images/kiosks/kiosk-image.png"
              />
            </div>
            <div className={styles.imageDataContainer} id={styles.kioskDataContainer}>
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

export default KioskFaq;
