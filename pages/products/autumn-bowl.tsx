import ProductInfo from "@/components/products/ProductInfo";
import SuggestedMeals from "@/components/products/SuggestedMeals";
import { MealData } from "@/lib/interfaces";
import { getRandomMeals } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
}

const AutumnBowl = ({ meals }: P) => {
  return (
    <>
      <ProductInfo />
      <SuggestedMeals meals={meals} collectionName="lunch and dinner" />
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
