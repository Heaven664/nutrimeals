import { useContext } from "react";
import MealsContext from "@/store/MealsContext";
import { MealData } from "@/lib/interfaces";

const useSelectDinnerLunchHandler = () => {
  const MealsCtx = useContext(MealsContext);

  const { allDinnerLunchMeals } = MealsCtx;

  const {
    getAllDinnerLunchMeals,
    getDairyFreeDinnerLunchMeals,
    getEggFreeDinnerLunchMeals,
    getGlutenFreeDinnerLunchMeals,
    getPeanutFreeDinnerLunchMeals,
    getVegetarianDinnerLunchMeals,
    getBeverage,
    getBeverages,
    getGiftCards,
    sortDinnerLunchAlphabetically,
    sortDinnerLunchAlphabeticallyReversed,
    sortDinnerLunchByPriceAsc,
    sortDinnerLunchByPriceDesc,
    sortDinnerLunchByDateAsc,
    sortDinnerLunchByDateDesc,
  } = MealsCtx;

  const filterRouter = new Map<string, (meals: MealData[]) => void>()
    .set("all-products", getAllDinnerLunchMeals)
    .set("dairy-free", getDairyFreeDinnerLunchMeals)
    .set("egg-free", getEggFreeDinnerLunchMeals)
    .set("gluten-free", getGlutenFreeDinnerLunchMeals)
    .set("peanut-free", getPeanutFreeDinnerLunchMeals)
    .set("vegetarian", getVegetarianDinnerLunchMeals)
    .set("beverage", getBeverage)
    .set("beverages", getBeverages)
    .set("gift-card", getGiftCards)
    .set("alphabetically-a-to-z", sortDinnerLunchAlphabetically)
    .set("alphabetically-z-to-a", sortDinnerLunchAlphabeticallyReversed)
    .set("price-low-to-hight", sortDinnerLunchByPriceAsc)
    .set("price-high-to-low", sortDinnerLunchByPriceDesc)
    .set("date-old-to-new", sortDinnerLunchByDateAsc)
    .set("date-new-to-old", sortDinnerLunchByDateDesc);

  const actionHandler = (optionName: string) => {
    const action = filterRouter.get(optionName);
    if (action) {
      action(allDinnerLunchMeals);
    }
  };

  const filterByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    actionHandler(selectedOption);
  };

  const sortByHandler = (
    e?: React.ChangeEvent<HTMLSelectElement> | null,
    value?: string | null
  ) => {
    const selectedOption = e ? e.target.value : value;
    actionHandler(selectedOption!);
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
