import { useContext } from "react";
import MealsContext from "@/store/MealsContext";

const useSelectDinnerLunchHandler = () => {
  const MealsCtx = useContext(MealsContext);

  const {
    getAllDinnerLunchMeals,
    getDairyFreeDinnerLunchMeals,
    getEggFreeDinnerLunchMeals,
    getGlutenFreeDinnerLunchMeals,
    getPeanutFreeDinnerLunchMeals,
    getVegetarianDinnerLunchMeals,
    sortDinnerLunchAlphabetically,
    sortDinnerLunchAlphabeticallyReversed,
    sortDinnerLunchByPriceAsc,
    sortDinnerLunchByPriceDesc,
    sortDinnerLunchByDateAsc,
    sortDinnerLunchByDateDesc,
  } = MealsCtx;

  const filterByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    if (selectedOption === "all-products") {
      getAllDinnerLunchMeals();
    }

    if (selectedOption === "dairy-free") {
      getDairyFreeDinnerLunchMeals();
    }

    if (selectedOption === "egg-free") {
      getEggFreeDinnerLunchMeals();
    }

    if (selectedOption === "gluten-free") {
      getGlutenFreeDinnerLunchMeals();
    }

    if (selectedOption === "peanut-free") {
      getPeanutFreeDinnerLunchMeals();
    }

    if (selectedOption === "vegetarian") {
      getVegetarianDinnerLunchMeals();
    }
  };

  const sortByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    if (selectedOption === "alphabetically-a-to-z") {
      sortDinnerLunchAlphabetically();
    }
    if (selectedOption === "alphabetically-z-to-a") {
      sortDinnerLunchAlphabeticallyReversed();
    }
    if (selectedOption === "price-low-to-hight") {
      sortDinnerLunchByPriceAsc();
    }
    if (selectedOption === "price-high-to-low") {
      sortDinnerLunchByPriceDesc();
    }
    if (selectedOption === "date-old-to-new") {
      sortDinnerLunchByDateAsc();
    }
    if (selectedOption === "date-new-to-old") {
      sortDinnerLunchByDateDesc();
    }
  };

  return { filterByHandler, sortByHandler };
};

export default useSelectDinnerLunchHandler;
