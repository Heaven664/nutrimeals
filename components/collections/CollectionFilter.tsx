import styles from "./CollectionFilter.module.css";
import { useContext } from "react";
import MealsContext from "@/store/MealsContext";

interface filterProps {
  productsNumber: number;
}

const CollectionFilter = ({ productsNumber }: filterProps) => {
  const MealsCtx = useContext(MealsContext);
  const { getDairyFreeMeals } = MealsCtx;

  const filterByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    if (selectedOption === "dairy-free") {
      getDairyFreeMeals();
    }
  };
  return (
    <div className={styles.collectionLayoutContainer}>
      <div className={styles.collectionLayout}>
        <div className={styles.filtersContainer}>
          <div className={styles.filterByContainer}>
            <label htmlFor="filterBy">filter by</label>
            <div className={styles.selectContainer}>
              <select name="filterBy" id="filterBy" onChange={filterByHandler}>
                <option value="all-products">All Products</option>
                <option value="dairy-free">Dairy Free</option>
                <option value="egg-free">Egg Free</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="peanut-free">Peanut Free</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
              <div className={styles.arrowContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.filterByContainer}>
            <label htmlFor="sortBy">sort by</label>
            <div className={styles.selectContainer}>
              <select name="sortBy" id="sortBy">
                <option value="alphabetically-a-to-z">
                  Alphabetically, A-Z
                </option>
                <option value="alphabetically-z-to-a">
                  Alphabetically, Z-A
                </option>
                <option value="price-low-to-hight">Price, Low to Hight</option>
                <option value="price-high-to-low">Price, Hight to Low</option>
                <option value="date-old-to-new">Date, Old to New</option>
                <option value="date-new-to-old">Date, New to Old</option>
              </select>
              <div className={styles.arrowContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productsNumberContainer}>
          <p>
            <i>{productsNumber} products</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionFilter;
