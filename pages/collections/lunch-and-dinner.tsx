import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { getAllDinnerAndLunchMeals } from "@/lib/mongoDB";

interface MealData {
  id: string;
  title: string;
  price: number;
  image: string;
  dairyFree: boolean;
  eggFree: boolean;
  glutenFree: boolean;
  peanutFree: boolean;
  vegetarian: boolean;
}

interface P {
  meals: MealData[];
}

const LunchAndDinnerCollection = ({ meals }: P) => {
  return (
    <>
      <CollectionTitle title="Lunch and Dinner" />
      <CollectionFilter productsNumber={20} />
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
