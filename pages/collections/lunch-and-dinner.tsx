import { useState } from "react";

import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { MealData } from "@/lib/interfaces";
import { getAllDinnerAndLunchMeals } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
}

const LunchAndDinnerCollection = ({ meals }: P) => {
  const [mealsNumber, setMealsNumber] = useState(meals.length);

  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={mealsNumber} />
      <CollectionsList collections={meals} />
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
