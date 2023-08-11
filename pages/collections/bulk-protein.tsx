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

const BulkProteinCollection = ({ meals }: P) => {
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
      <CollectionTitle
        title="Protein"
        description="Choose your type of protein and seasoning. Serving size is 1kg per order. This option is great if you want to build your own meals"
      />
      <CollectionFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getCollection("bulk protein");
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default BulkProteinCollection;
