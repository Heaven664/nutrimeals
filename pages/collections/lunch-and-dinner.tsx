import { useContext, useEffect } from "react";

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

  const {
    changeAllDinnerLunchMeals,
    activeDinnerLunchMeals,
    changeActiveDinnerLunchMeals,
  } = MealsCtx;

  useEffect(() => {
    changeActiveDinnerLunchMeals(meals);
    changeAllDinnerLunchMeals(meals);
  }, []);

  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

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
