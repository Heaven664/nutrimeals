import React from "react";
import Image from "next/image";

import styles from "./BlogInfo.module.css";

const BlogInfo: React.FC = () => {
  return (
    <div className={styles.blogLayout}>
      <div className={styles.blogContainer}>
        <div className={styles.blogTitle}>
          <h1>
            Check out the Nutrimeals Blog and learn more about healthy meal prep
          </h1>
        </div>
        <div className={styles.blogElementsContainer}>
          <div className={styles.blogElement}>
            <div className={styles.blogImageContainer}>
              <Image
                alt="blog-image-1"
                width={300}
                height={300}
                src="/images/homepage/blog/blog-new-1.avif"
              />
            </div>
            <div className={styles.blogTextContainer}>
              <h2>
                The Ultimate Guide to a High Protein Diet: Unleashing the Power
                of Clean Eating
              </h2>
              <p>
                In the pursuit of a healthy lifestyle, nutrition plays a vital
                role. One popular approach that has gained significant
                attention...
              </p>
            </div>
          </div>
          <div className={styles.blogElement}>
            <div className={styles.blogImageContainer}>
              <Image
                alt="blog-image-2"
                width={300}
                height={300}
                src="/images/homepage/blog/blog-new-2.avif"
              />
            </div>
            <div className={styles.blogTextContainer}>
              <h2>Healthy Meal Prep Tips: How to Meal Prep on a Budget</h2>
              <p>
                Eating healthy while sticking to a budget can be a challenging
                task, but it is not impossible. Meal prepping is...
              </p>
            </div>
          </div>
          <div className={styles.blogElement}>
            <div className={styles.blogImageContainer}>
              <Image
                alt="blog-image-3"
                width={300}
                height={300}
                src="/images/homepage/blog/blog-new-3.webp"
              />
            </div>
            <div className={styles.blogTextContainer}>
              <h2>The Ultimate Guide to Healthy Meal Prep Containers</h2>
              <p>
                It’s no surprise that in today's fast-paced world, maintaining a
                healthy lifestyle can often feel like a challenge. However,
                with...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
