import { useContext, useEffect } from "react";

import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionMerchandiseFilter from "@/components/collections/CollectionMerchandiseFilter";
import CollectionsList from "@/components/collections/CollectionsList";
import { getCollection } from "@/lib/mongoDB";
import { MealData } from "@/lib/interfaces";
import MealsContext from "@/store/MealsContext";

interface P {
  meals: MealData[];
}

const Merchandise = ({ meals }: P) => {
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
      <CollectionTitle title="Merchandise" />
      <CollectionMerchandiseFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} />
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getCollection("merchandise");
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default Merchandise;
