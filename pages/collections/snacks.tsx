import { useContext, useEffect } from "react";

import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionsList from "@/components/collections/CollectionsList";
import { getAllSnackMeals } from "@/lib/mongoDB";
import { MealData } from "@/lib/interfaces";
import MealsContext from "@/store/MealsContext";

interface P {
  meals: MealData[];
}

const SnackMeals = ({ meals }: P) => {
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
      <CollectionTitle title="Snacks" />
      <CollectionFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getAllSnackMeals();
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default SnackMeals;