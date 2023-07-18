import styles from "./CollectionTitle.module.css";

interface CollectionTitleProps {
  title: string;
}

const CollectionTitle = ({ title }: CollectionTitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default CollectionTitle;
