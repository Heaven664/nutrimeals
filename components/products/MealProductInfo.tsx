import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import MealsContext from "@/store/MealsContext";
import styles from "./MealProductInfo.module.css";
import { ProductData } from "@/lib/interfaces";
import { addItemToCartFromProductPage } from "@/helpers/helpers";

interface P {
  productData: ProductData;
}

const MealProductInfo = ({ productData }: P) => {
  const itemCtx = useContext(MealsContext);
  const { changeCartItems } = itemCtx;
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(productData.mealData.imagePath);
  const [recipeContainer, setRecipeContainer] = useState(
    productData.mealData.beverageImageContainer
  );
  const [selectedPreview, setSelectedPreview] = useState(0);

  useEffect(() => {
    setMainImage(productData.mealData.imagePath);
    setSelectedPreview(0);
    setRecipeContainer(productData.mealData.beverageImageContainer);
  }, [productData]);

  const changeImageHandler = (
    path: string,
    isRecipe: boolean,
    index: number
  ) => {
    setMainImage(path);
    setRecipeContainer(isRecipe);
    setSelectedPreview(index);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedCart = addItemToCartFromProductPage(productData, quantity);
    changeCartItems(updatedCart);
  };

  const allImages = productData.images.map((image, index) => {
    return (
      <li
        onClick={() => changeImageHandler(image.path, image.isRecipe, index)}
        className={selectedPreview === index ? styles.isSelected : ""}
        key={image.path}
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
              width={800}
              height={800}
              alt={productData.mealData.title}
            />
          </div>
          <div className={styles.imagesPreviewContainer}>
            {productData.images.length > 1 ? <ul>{allImages}</ul> : null}
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productHeader}>
            <h1>{productData.mealData.title}</h1>
            <h2>${productData.mealData.price}</h2>
          </div>
          <form
            className={styles.productForm}
            onSubmit={(e) => formSubmitHandler(e)}
          >
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
