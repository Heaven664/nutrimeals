import { useContext, useEffect } from "react";

import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import CollectionBeverageFilter from "@/components/collections/CollectionBeverageFilter";
import { getCollection } from "@/lib/mongoDB";
import { MealData } from "@/lib/interfaces";
import MealsContext from "@/store/MealsContext";

interface P {
  meals: MealData[];
}


const Beverages = ({ meals }: P) => {
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
      <CollectionTitle title="Beverages" />
      <CollectionBeverageFilter productsNumber={activeDinnerLunchMeals.length} />
      <CollectionsList collections={activeDinnerLunchMeals} isBeverage={true}/>
    </>
  );
};

export async function getStaticProps() {
  let meals: MealData[];

  try {
    meals = await getCollection('beverages');
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
}

export default Beverages;
