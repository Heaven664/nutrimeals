import { useContext, useEffect } from "react";

import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { MealData } from "@/lib/interfaces";
import { getCollection } from "@/lib/mongoDB";
import MealsContext from "@/store/MealsContext";

interface P {
  meals: MealData[];
}

const CarbohydratesCollection = ({ meals }: P) => {
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
      <CollectionTitle title="Carbohydrates" description="Choose from a selection of pre cooked carbohydrates to create your own meals at home!"/>
      <CollectionFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getCollection('carbohydrates');
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default CarbohydratesCollection;
