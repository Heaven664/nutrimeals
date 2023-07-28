import Image from "next/image";
import React, { useState } from "react";
import styles from "./ProductInfo.module.css";

// interface ProductProps {
//   title: string;
//   imagePath: string;
//   recipePath: string;

// }

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "/images/collections/autumn-bowl.webp"
  );

  const changeImageHandler = (imagePath: string) => {
    setMainImage(imagePath);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuantity(parseInt(e.target.value));
  };
  return (
    <div className={styles.productLayout}>
      <div className={styles.productContainer}>
        <div className={styles.productImages}>
          <div className={styles.mainImageContainer}>
            <Image src={mainImage} width={600} height={600} alt="autumn-bowl" />
          </div>
          <div className={styles.imagesPreviewContainer}>
            <ul>
              <li
                onClick={() =>
                  changeImageHandler("/images/collections/autumn-bowl.webp")
                }
              >
                <Image
                  src="/images/collections/autumn-bowl.webp"
                  width={200}
                  height={200}
                  alt="autumn-bowl"
                />
              </li>
              <li
                onClick={() =>
                  changeImageHandler("/images/collections/broccoli.webp")
                }
              >
                <Image
                  src="/images/collections/broccoli.webp"
                  width={200}
                  height={200}
                  alt="autumn-bowl"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productHeader}>
            <h1>Autumn Bowl</h1>
            <h2>$16.99</h2>
          </div>
          <form className={styles.productForm} action="">
            <label htmlFor="quantity-input">Quantity</label>
            <input
              id="quantity-input"
              type="number"
              min={1}
              value={quantity}
              onChange={inputHandler}
            />
            <button>Add to card</button>
          </form>
          <div className={styles.productDescriptionContainer}>
            <p>
              Enjoy this delicious ready to eat meal anytime! Oven baked
              seasoned chicken with roasted sweet potatoes, Brussels sprouts,
              sautéed apples and onions, and crispy bacon. Take your meal prep
              to the next level with this delicious protein packed meal!
            </p>
            <p>No modifications are available for this dish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
