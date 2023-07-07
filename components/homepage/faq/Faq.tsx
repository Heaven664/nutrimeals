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
                activeQuestion === 1 ? "" : styles.hidden
              }`}
            >
              <p>
                You will pick a date for your delivery before you get to the
                checkout. We will only deliver on the day that has been selected
                on the calendar. <br />
                <strong>Calgary meal prep delivery</strong> <br />
                Sunday, Monday, Tuesday & Thursday: 2pm-7pm <br />
                <strong>Alberta meal prep delivery</strong> <br />
                Tuesday, Wednesday & Friday: 9am-5pm
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(2)}
            >
              <p>Where do I find the nutrition and meal info?</p>
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
                Each meal has a sticker with your name, the meal name and a full
                table of nutrition facts. If you misplace the sticker, you can
                find the nutritional information and ingredient list on the
                second photo of each product. All of our meals do not have salt
                added so that you can adjust to your own preference. Please
                season your meals as you feel is needed.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(3)}
            >
              <p>I signed up for a subscription? When does it get delivered?</p>
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
                This will depend on the delivery day you chose and how
                frequently you want the delivery to happen. For example, if you
                chose your <strong>first box</strong> to be delivered on a
                Monday, and you chose your frequency of deliveries to be every
                two weeks, your box of meals will arrive every other Monday.
                <br />
                If you purchased a 21 meal box, you will have 2 delivery days
                per week. Your first delivery day will be the week day you
                select, and your second delivery will occur 4-5 days after your
                first delivery so that you have fresh meals that will last you
                the entire week.
              </p>
            </div>
            <div
              className={styles.faqQuestionElement}
              onClick={() => handleFaqChange(4)}
            >
              <p>Are your meals fresh or frozen?</p>
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
                All of our meals are delivered fresh and ready for you to put in
                the fridge! Each meal will last up to 5 days in your fridge once
                it's been delivered.
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
