import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { CollectionItem } from "@/lib/interfaces";
import { addItemToCartFromCollection } from "@/helpers/helpers";

import styles from "./CollectionsListItem.module.css";

const CollectionListItem = ({
  id,
  title,
  image,
  price,
  refString,
  isBeverage,
  suggestedMeals,
}: CollectionItem) => {
  const [itemNumber, setItemNumber] = useState(1);

  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemNumber(parseInt(e.target.value));
  };

  let beverageContainer = isBeverage ? true : false;

  const item = {
    id: id,
    title: title,
    image: image,
    price: price,
    isBeverage: beverageContainer,
  };

  return (
    <li className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <Link href={`/products/${refString}`}>
          <div
            className={`
              ${
                isBeverage
                  ? styles.beverageImageContainer
                  : styles.imageContainer
              } ${
              suggestedMeals && isBeverage
                ? styles.suggestedBeverageContainer
                : null
            }`}
          >
            <Image src={image} alt={title} width={300} height={300} />
          </div>
          <div className={styles.titleContainer}>
            <h1>{title}</h1>
          </div>
          <h2>${price}</h2>
        </Link>
        <div className={styles.controllerContainer}>
          <button onClick={() => addItemToCartFromCollection(item, itemNumber)}>
            Add to cart
          </button>
          <input
            type="number"
            min={1}
            value={itemNumber}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
    </li>
  );
};

export default CollectionListItem;
