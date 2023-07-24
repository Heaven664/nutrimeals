import React, { createContext, useState } from "react";
import { MealData, MealsContextType } from "@/lib/interfaces";

interface P {
  children: React.ReactNode;
}

const MealsContext = createContext<MealsContextType>({
  allMeals: [],
  activeMeals: [],
  changeActiveMeals() {},
  changeAllMeals() {},
  getDairyFreeMeals() {},
});

const MealsContextProvider = ({ children }: P) => {
  const [allMeals, setAllMeals] = useState<MealData[]>([]);
  const [activeMeals, setActiveMeals] = useState<MealData[]>([]);

  const changeActiveMeals = (meals: MealData[]) => {
    setActiveMeals(meals);
  };

  const changeAllMeals = (meals: MealData[]) => {
    setAllMeals(meals);
  };

  const getDairyFreeMeals = () => {
    const dairyFreeMeals = allMeals.filter((meal) => meal.dairyFree);
    setActiveMeals(dairyFreeMeals);
  };

  const context: MealsContextType = {
    allMeals: allMeals,
    activeMeals: activeMeals,
    changeActiveMeals: changeActiveMeals,
    changeAllMeals: changeAllMeals,
    getDairyFreeMeals: getDairyFreeMeals,
  };

  return (
    <MealsContext.Provider value={context}>{children}</MealsContext.Provider>
  );
};

export { MealsContextProvider };

export default MealsContext;
