import Image from "next/image";

interface CollectionItem {
  title: string;
  image: string;
  price: number;
}

const CollectionListItem = ({ title, image, price }: CollectionItem) => {
  return (
    <li>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <Image src={image} alt={title} width={300} height={300} />
    </li>
  );
};

export default CollectionListItem;
