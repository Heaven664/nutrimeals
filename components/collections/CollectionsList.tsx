import CollectionListItem from "./CollectionsListItem";

import styles from "./CollectionsList.module.css";

interface CollectionItem {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface P {
  collections: CollectionItem[];
  isBeverage?: boolean;
  suggestedMeals?: boolean;
}

const CollectionsList = ({ collections, isBeverage, suggestedMeals }: P) => {
  const collectionItems = collections.map((collection) => {
    const refString = collection.title.toLocaleLowerCase().replace(/ /g, "-");
    return (
      <CollectionListItem
        id={collection.id}
        title={collection.title}
        price={collection.price}
        image={collection.image}
        key={collection.title}
        refString={refString}
        isBeverage={isBeverage}
        suggestedMeals={suggestedMeals}
      />
    );
  });

  return (
    <div className={styles.collectionLayout}>
      <ul className={styles.collectionContainer}>{collectionItems}</ul>
    </div>
  );
};

export default CollectionsList;
