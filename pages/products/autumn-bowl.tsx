import SuggestedMeals from "@/components/products/SuggestedMeals";
import { MealData } from "@/lib/interfaces";
import { getRandomMeals } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
}

const AutumnBowl = ({ meals }: P) => {
  return (
    <>
      <SuggestedMeals meals={meals} />
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
