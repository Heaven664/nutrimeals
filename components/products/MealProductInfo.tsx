import Image from "next/image";
import React, { useState } from "react";
import styles from "./MealProductInfo.module.css";

interface ProductData {
  mealData: {
    title: string;
    price: number;
    imagePath: string;
    recipePath: string;
    description: string;
    noModifications: boolean;
    beverageImageContainer: boolean;
  };
  images: {
    path: string;
    isRecipe: boolean;
  }[];
}

interface P {
  productData: ProductData;
}

const MealProductInfo = ({ productData }: P) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(productData.mealData.imagePath);
  const [recipeContainer, setRecipeContainer] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState(0);

  const changeImageHandler = (
    path: string,
    isRecipe: boolean,
    index: number
  ) => {
    setMainImage(path);
    setRecipeContainer(isRecipe);
    setSelectedPreview(index);
  };

  const allImages = productData.images.map((image, index) => {
    return (
      <li
        onClick={() => changeImageHandler(image.path, image.isRecipe, index)}
        className={selectedPreview === index ? styles.isSelected : ""}
      >
        <Image
          src={image.path}
          width={200}
          height={200}
          alt={`${productData.mealData.title} number ${index}`}
        />
      </li>
    );
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuantity(parseInt(e.target.value));
  };
  return (
    <div className={styles.productLayout}>
      <div className={styles.productContainer}>
        <div className={styles.productImages}>
          <div
            className={
              recipeContainer
                ? styles.mainImageRecipeContainer
                : styles.mainImageContainer
            }
          >
            <Image
              src={mainImage}
              width={600}
              height={600}
              alt={productData.mealData.title}
            />
          </div>
          <div className={styles.imagesPreviewContainer}>
            <ul>{allImages}</ul>
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productHeader}>
            <h1>{productData.mealData.title}</h1>
            <h2>${productData.mealData.price}</h2>
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
            <p>{productData.mealData.description}</p>
            {productData.mealData.noModifications ? (
              <p>No modifications are available for this dish</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealProductInfo;
