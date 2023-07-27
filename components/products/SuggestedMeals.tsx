import { MealData } from "@/lib/interfaces";
import CollectionsList from "../collections/CollectionsList";
import styles from "./SuggestedMeals.module.css";

interface P {
  meals: MealData[];
}

const SuggestedMeals = ({ meals }: P) => {
  return (
    <div className={styles.suggestionsContainer}>
      <h2 className={styles.suggestionTitle}>You may also enjoy</h2>
      <CollectionsList collections={meals} />
    </div>
  );
};

export default SuggestedMeals;
