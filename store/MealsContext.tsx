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
  getDairyFreeDinnerLunchMeals() {},
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

  const getDairyFreeDinnerLunchMeals = () => {
    const dairyFreeMeals = allDinnerLunchMeals.filter((meal) => meal.dairyFree);
    setActiveDinnerLunchMeals(dairyFreeMeals);
  };

  const context: MealsContextType = {
    allDinnerLunchMeals: allDinnerLunchMeals,
    activeDinnerLunchMeals: activeDinnerLunchMeals,
    changeActiveDinnerLunchMeals: changeActiveDinnerLunchMeals,
    changeAllDinnerLunchMeals: changeAllDinnerLunchMeals,
    getDairyFreeDinnerLunchMeals: getDairyFreeDinnerLunchMeals,
  };

  return (
    <MealsContext.Provider value={context}>{children}</MealsContext.Provider>
  );
};

export { MealsContextProvider };

export default MealsContext;
