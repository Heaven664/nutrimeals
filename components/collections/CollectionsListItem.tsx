import Image from "next/image";
import { ChangeEvent, useState } from "react";

import styles from "./CollectionsListItem.module.css";

interface CollectionItem {
  title: string;
  image: string;
  price: number;
  isBeverage?: boolean;
}

const CollectionListItem = ({
  title,
  image,
  price,
  isBeverage,
}: CollectionItem) => {
  const [itemNumber, setItemNumber] = useState(1);

  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemNumber(parseInt(e.target.value));
  };

  return (
    <li className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <div
          className={
            isBeverage ? styles.beverageImageContainer : styles.imageContainer
          }
        >
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div className={styles.titleContainer}>
          <h1>{title}</h1>
        </div>
        <h2>${price}</h2>
        <div className={styles.controllerContainer}>
          <button>Add to cart</button>
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
