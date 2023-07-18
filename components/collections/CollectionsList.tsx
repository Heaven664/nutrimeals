import CollectionListItem from "./CollectionsListItem";

interface CollectionItem {
  title: string;
  image: string;
  price: number;
}

interface CollectionType {
  collections: CollectionItem[];
}

const CollectionsList = ({ collections }: CollectionType) => {
  const collectionItems = collections.map((collection) => (
    <CollectionListItem
      title={collection.title}
      price={collection.price}
      image={collection.image}
    />
  ));

  return <ul>{collectionItems}</ul>;
};

export default CollectionsList;
