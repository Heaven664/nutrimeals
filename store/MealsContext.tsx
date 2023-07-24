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
  };

  return (
    <MealsContext.Provider value={context}>{children}</MealsContext.Provider>
  );
};

export { MealsContextProvider };

export default MealsContext;
