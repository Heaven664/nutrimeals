import CollectionsList from "@/components/collections/CollectionsList";
import { MealData } from "@/lib/interfaces";
import { getRandomMeals as getRandomMeals } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
}

const AutumnBowl = ({ meals }: P) => {
  return (
    <>
      <CollectionsList collections={meals} />
    </>
  );
};

export default AutumnBowl;

export const getStaticProps = async () => {
  let meals: MealData[];

  try {
    meals = await getRandomMeals("meals", 4);
  } catch (err) {
    meals = [];
    console.log(err);
  }

  return {
    props: { meals },
  };
};
