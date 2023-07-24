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

  const getDairyFreeDinnerLunchMeals = () => {
    const dairyFreeMeals = allDinnerLunchMeals.filter((meal) => meal.dairyFree);
    setActiveDinnerLunchMeals(dairyFreeMeals);
  };

  const getEggFreeDinnerLunchMeals = () => {
    const eggFreeMeals = allDinnerLunchMeals.filter((meal) => meal.eggFree);
    setActiveDinnerLunchMeals(eggFreeMeals);
  };

  const getGlutenFreeDinnerLunchMeals = () => {
    const glutenFreeMeals = allDinnerLunchMeals.filter(
      (meal) => meal.glutenFree
    );
    setActiveDinnerLunchMeals(glutenFreeMeals);
  };

  const getPeanutFreeDinnerLunchMeals = () => {
    const peanutFreeMeals = allDinnerLunchMeals.filter(
      (meal) => meal.peanutFree
    );
    setActiveDinnerLunchMeals(peanutFreeMeals);
  };

  const getVegetarianDinnerLunchMeals = () => {
    const vegetarianMeals = allDinnerLunchMeals.filter(
      (meal) => meal.vegetarian
    );
    setActiveDinnerLunchMeals(vegetarianMeals);
  };

  const sortDinnerLunchAlphabetically = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => a.title.localeCompare(b.title)
    );
    setActiveDinnerLunchMeals(sortedMeals);
  };

  const sortDinnerLunchAlphabeticallyReversed = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => b.title.localeCompare(a.title)
    );
    setActiveDinnerLunchMeals(sortedMeals);
  };

  const sortDinnerLunchByPriceAsc = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => a.price - b.price
    );
    setActiveDinnerLunchMeals(sortedMeals);
  };

  const sortDinnerLunchByPriceDesc = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => b.price - a.price
    );
    setActiveDinnerLunchMeals(sortedMeals);
  };

  const sortDinnerLunchByDateAsc = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => a.date.localeCompare(b.date)
    );
    setActiveDinnerLunchMeals(sortedMeals);
  };

  const sortDinnerLunchByDateDesc = () => {
    const sortedMeals = [...activeDinnerLunchMeals].sort(
      (a: MealData, b: MealData) => b.date.localeCompare(a.date)
    );
    setActiveDinnerLunchMeals(sortedMeals);
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
