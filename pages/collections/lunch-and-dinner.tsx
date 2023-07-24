import { useState, useContext, useEffect } from "react";

import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { MealData } from "@/lib/interfaces";
import { getAllDinnerAndLunchMeals } from "@/lib/mongoDB";
import MealsContext from "@/store/MealsContext";

interface P {
  meals: MealData[];
}

const LunchAndDinnerCollection = ({ meals }: P) => {
  const MealsCtx = useContext(MealsContext);
  const { changeAllDinnerLunchMeals: changeAllMeals, activeDinnerLunchMeals: activeMeals, changeActiveDinnerLunchMeals: changeActiveMeals } = MealsCtx;
  const [currentMeals, setCurrentMeals] = useState<MealData[]>(meals);

  useEffect(() => {
    changeActiveMeals(meals);
    changeAllMeals(meals);
  }, []);

  useEffect(() => {
    setCurrentMeals(activeMeals);
  }, [activeMeals]);

  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={currentMeals.length} />
      <CollectionsList collections={currentMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: object[];

  try {
    meals = await getAllDinnerAndLunchMeals();
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default LunchAndDinnerCollection;
