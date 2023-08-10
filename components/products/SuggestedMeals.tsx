import { useRouter } from "next/router";
import { MealData } from "@/lib/interfaces";
import { collectionToURL } from "@/helpers/helpers";
import CollectionsList from "../collections/CollectionsList";
import styles from "./SuggestedMeals.module.css";

interface P {
  meals: MealData[];
  collectionName: string;
  isBeverage: boolean;
}

const SuggestedMeals = ({ meals, collectionName, isBeverage }: P) => {
  const router = useRouter();
  const collectionURL = collectionToURL(collectionName);
  return (
    <div className={styles.suggestionsContainer}>
      <h2 className={styles.suggestionTitle}>You may also enjoy</h2>
      <CollectionsList
        collections={meals}
        suggestedMeals={true}
        isBeverage={isBeverage}
      />
      <div className={styles.buttonContainer}>
        <button onClick={() => router.push(collectionURL)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 0 20 8"
          >
            <path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" />
          </svg>
          {`Back to ${collectionName}`}
        </button>
      </div>
    </div>
  );
};

export default SuggestedMeals;
