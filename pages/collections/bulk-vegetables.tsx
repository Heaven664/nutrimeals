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
      <CollectionTitle title="Vegetables" description="Choose from our selection of delicious and fresh, cooked vegetables in a bulk serving. Use this to create your own meals at home with your own portion sizes"/>
      <CollectionFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getCollection('vegetables');
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default CarbohydratesCollection;
