import { useContext } from "react";
import MealsContext from "@/store/MealsContext";

const useSelectDinnerLunchHandler = () => {
  const MealsCtx = useContext(MealsContext);

  const { activeDinnerLunchMeals, allDinnerLunchMeals } = MealsCtx;

  const {
    getAllDinnerLunchMeals,
    getDairyFreeDinnerLunchMeals,
    getEggFreeDinnerLunchMeals,
    getGlutenFreeDinnerLunchMeals,
    getPeanutFreeDinnerLunchMeals,
    getVegetarianDinnerLunchMeals,
    getBeverage,
    getBeverages,
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
      getAllDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "dairy-free") {
      getDairyFreeDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "egg-free") {
      getEggFreeDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "gluten-free") {
      getGlutenFreeDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "peanut-free") {
      getPeanutFreeDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "vegetarian") {
      getVegetarianDinnerLunchMeals(allDinnerLunchMeals);
    }

    if (selectedOption === "beverage") {
      getBeverage(allDinnerLunchMeals);
    }

    if (selectedOption === "beverages") {
      getBeverages(allDinnerLunchMeals);
    }
  };

  const sortByHandler = (
    e?: React.ChangeEvent<HTMLSelectElement> | null,
    value?: string | null
  ) => {
    let selectedOption;
    if (value) {
      selectedOption = value;
    } else if (e) {
      selectedOption = e.target.value;
    }

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

  const filterAndSort = (
    e: React.ChangeEvent<HTMLSelectElement>,
    reference: React.RefObject<HTMLSelectElement>
  ) => {
    filterByHandler(e);
    const selectedOption = reference.current?.value;
    sortByHandler(null, selectedOption);
  };

  return { filterAndSort, sortByHandler };
};

export default useSelectDinnerLunchHandler;
