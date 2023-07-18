import Image from "next/image";

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
    <li>
      <h1>{collection.title}</h1>
      <h2>{collection.price}</h2>
      <Image
        src={collection.image}
        alt={collection.title}
        width={300}
        height={300}
      />
    </li>
  ));

  return <ul>{collectionItems}</ul>;
};

export default CollectionsList;
