import CollectionListItem from "./CollectionsListItem";

import styles from "./CollectionsList.module.css";

interface CollectionItem {
  title: string;
  image: string;
  price: number;
}

interface P {
  collections: CollectionItem[];
}

const CollectionsList = ({ collections }: P) => {
  const collectionItems = collections.map((collection) => (
    <CollectionListItem
      title={collection.title}
      price={collection.price}
      image={collection.image}
    />
  ));

  return (
    <div className={styles.collectionLayout}>
      <ul className={styles.collectionContainer}>{collectionItems}</ul>
    </div>
  );
};

export default CollectionsList;
