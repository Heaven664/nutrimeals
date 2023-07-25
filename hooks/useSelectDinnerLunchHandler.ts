import { useContext } from "react";
import MealsContext from "@/store/MealsContext";

const useSelectDinnerLunchHandler = () => {
  const MealsCtx = useContext(MealsContext);

  const { activeDinnerLunchMeals } = MealsCtx;

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
      getAllDinnerLunchMeals(activeDinnerLunchMeals);
    }

    if (selectedOption === "dairy-free") {
      getDairyFreeDinnerLunchMeals(activeDinnerLunchMeals);
    }

    if (selectedOption === "egg-free") {
      getEggFreeDinnerLunchMeals(activeDinnerLunchMeals);
    }

    if (selectedOption === "gluten-free") {
      getGlutenFreeDinnerLunchMeals(activeDinnerLunchMeals);
    }

    if (selectedOption === "peanut-free") {
      getPeanutFreeDinnerLunchMeals(activeDinnerLunchMeals);
    }

    if (selectedOption === "vegetarian") {
      getVegetarianDinnerLunchMeals(activeDinnerLunchMeals);
    }
  };

  const sortByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    if (selectedOption === "alphabetically-a-to-z") {
      sortDinnerLunchAlphabetically(activeDinnerLunchMeals);
    }
    if (selectedOption === "alphabetically-z-to-a") {
      sortDinnerLunchAlphabeticallyReversed(activeDinnerLunchMeals);
    }
    if (selectedOption === "price-low-to-hight") {
      sortDinnerLunchByPriceAsc(activeDinnerLunchMeals);
    }
    if (selectedOption === "price-high-to-low") {
      sortDinnerLunchByPriceDesc(activeDinnerLunchMeals);
    }
    if (selectedOption === "date-old-to-new") {
      sortDinnerLunchByDateAsc(activeDinnerLunchMeals);
    }
    if (selectedOption === "date-new-to-old") {
      sortDinnerLunchByDateDesc(activeDinnerLunchMeals);
    }
  };

  return { filterByHandler, sortByHandler };
};

export default useSelectDinnerLunchHandler;
