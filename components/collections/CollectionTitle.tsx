import styles from "./CollectionTitle.module.css";

interface CollectionTitleProps {
  title: string;
  description?: string;
}

const CollectionTitle = ({ title, description }: CollectionTitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CollectionTitle;
