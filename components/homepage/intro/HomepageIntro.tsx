import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { JSX } from "react";
import Image from "next/image";

import OrderSteps from "../preview/OrderSteps";

import styles from "./HomepageIntro.module.css";
import SpecsList from "./SpecsList";

const HomepageIntro = (): JSX.Element => {
  return (
    <>
      <section className={styles.introLayout}>
        <div className={styles.introContainer}>
          <div className={styles.introTextContainer}>
            <div className={styles.introTitleContainer}>
              <h2>Why you're going to love Nutrimeals healthy meal prep:</h2>
            </div>
            <div className={styles.introSpecsContainer}>
              <SpecsList />
            </div>
            <div className={styles.likesContainer}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#09aee4" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#09aee4" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#09aee4" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#09aee4" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#09aee4" }}
                  />
                </li>
              </ul>
            </div>
            <div className={styles.infoFooterContainer}>
              <p>Over 100,000 meals made for people just like you</p>
            </div>
          </div>
          <div className={styles.introImageContainer}>
            <div className={styles.introImage}>
              <Image
                src="/images/homepage/homepage-intro.png"
                priority={true}
                width={750}
                height={750}
                alt="intro-image"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <OrderSteps />
    </>
  );
};

export default HomepageIntro;
