import React, { createContext, useState } from "react";
import { MealData, MealsContextType } from "@/lib/interfaces";

interface P {
  children: React.ReactNode;
}

const MealsContext = createContext<MealsContextType>({
  allDinnerLunchMeals: [],
  activeDinnerLunchMeals: [],
  changeActiveDinnerLunchMeals() {},
  changeAllDinnerLunchMeals() {},
  getAllDinnerLunchMeals() {},
  getDairyFreeDinnerLunchMeals() {},
  getEggFreeDinnerLunchMeals() {},
  getGlutenFreeDinnerLunchMeals() {},
  getPeanutFreeDinnerLunchMeals() {},
  getVegetarianDinnerLunchMeals() {},
  getBeverage() {},
  getBeverages() {},
  getGiftCards() {},
  sortDinnerLunchAlphabetically() {},
  sortDinnerLunchAlphabeticallyReversed() {},
  sortDinnerLunchByPriceAsc() {},
  sortDinnerLunchByPriceDesc() {},
  sortDinnerLunchByDateAsc() {},
  sortDinnerLunchByDateDesc() {},
});

const MealsContextProvider = ({ children }: P) => {
  const [allDinnerLunchMeals, setAllDinnerLunchMeals] = useState<MealData[]>(
    []
  );

  const [activeDinnerLunchMeals, setActiveDinnerLunchMeals] = useState<
    MealData[]
  >([]);

  const changeActiveDinnerLunchMeals = (meals: MealData[]) => {
    setActiveDinnerLunchMeals(meals);
  };

  const changeAllDinnerLunchMeals = (meals: MealData[]) => {
    setAllDinnerLunchMeals(meals);
  };

  const getAllDinnerLunchMeals = () => {
    setActiveDinnerLunchMeals(allDinnerLunchMeals);
  };

  const getDairyFreeDinnerLunchMeals = (meals: MealData[]) => {
    const dairyFreeMeals = meals.filter((meal) => meal.dairyFree);
    setActiveDinnerLunchMeals(dairyFreeMeals);
  };

  const getEggFreeDinnerLunchMeals = (meals: MealData[]) => {
    const eggFreeMeals = meals.filter((meal) => meal.eggFree);
    setActiveDinnerLunchMeals(eggFreeMeals);
  };

  const getGlutenFreeDinnerLunchMeals = (meals: MealData[]) => {
    const glutenFreeMeals = meals.filter((meal) => meal.glutenFree);
    setActiveDinnerLunchMeals(glutenFreeMeals);
  };

  const getPeanutFreeDinnerLunchMeals = (meals: MealData[]) => {
    const peanutFreeMeals = meals.filter((meal) => meal.peanutFree);
    setActiveDinnerLunchMeals(peanutFreeMeals);
  };

  const getVegetarianDinnerLunchMeals = (meals: MealData[]) => {
    const vegetarianMeals = meals.filter((meal) => meal.vegetarian);
    setActiveDinnerLunchMeals(vegetarianMeals);
  };

  const getBeverage = (meals: MealData[]) => {
    const beverage = meals.filter((meal) => meal.beverage);
    setActiveDinnerLunchMeals(beverage);
  };

  const getBeverages = (meals: MealData[]) => {
    const beverages = meals.filter((meal) => meal.beverages);
    setActiveDinnerLunchMeals(beverages);
  };

  const getGiftCards = (meals: MealData[]) => {
    const giftCards = meals.filter((meal) => meal.giftCard);
    setActiveDinnerLunchMeals(giftCards);
  };

  const sortDinnerLunchAlphabetically = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) =>
        a.title.localeCompare(b.title)
      );
    });
  };

  const sortDinnerLunchAlphabeticallyReversed = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) =>
        b.title.localeCompare(a.title)
      );
    });
  };

  const sortDinnerLunchByPriceAsc = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) => a.price - b.price);
    });
  };

  const sortDinnerLunchByPriceDesc = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) => b.price - a.price);
    });
  };

  const sortDinnerLunchByDateAsc = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) =>
        a.date.localeCompare(b.date)
      );
    });
  };

  const sortDinnerLunchByDateDesc = () => {
    setActiveDinnerLunchMeals((prev) => {
      return [...prev].sort((a: MealData, b: MealData) =>
        b.date.localeCompare(a.date)
      );
    });
  };

  const context: MealsContextType = {
    allDinnerLunchMeals: allDinnerLunchMeals,
    activeDinnerLunchMeals: activeDinnerLunchMeals,
    changeActiveDinnerLunchMeals: changeActiveDinnerLunchMeals,
    changeAllDinnerLunchMeals: changeAllDinnerLunchMeals,
    getAllDinnerLunchMeals: getAllDinnerLunchMeals,
    getDairyFreeDinnerLunchMeals: getDairyFreeDinnerLunchMeals,
    getEggFreeDinnerLunchMeals: getEggFreeDinnerLunchMeals,
    getGlutenFreeDinnerLunchMeals: getGlutenFreeDinnerLunchMeals,
    getPeanutFreeDinnerLunchMeals: getPeanutFreeDinnerLunchMeals,
    getVegetarianDinnerLunchMeals: getVegetarianDinnerLunchMeals,
    sortDinnerLunchAlphabetically: sortDinnerLunchAlphabetically,
    getBeverage: getBeverage,
    getBeverages: getBeverages,
    getGiftCards: getGiftCards,
    sortDinnerLunchAlphabeticallyReversed:
      sortDinnerLunchAlphabeticallyReversed,
    sortDinnerLunchByPriceAsc: sortDinnerLunchByPriceAsc,
    sortDinnerLunchByPriceDesc: sortDinnerLunchByPriceDesc,
    sortDinnerLunchByDateAsc: sortDinnerLunchByDateAsc,
    sortDinnerLunchByDateDesc: sortDinnerLunchByDateDesc,
  };

  return (
    <MealsContext.Provider value={context}>{children}</MealsContext.Provider>
  );
};

export { MealsContextProvider };

export default MealsContext;
