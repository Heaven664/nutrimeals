import MealProductInfo from "@/components/products/MealProductInfo";
import SuggestedMeals from "@/components/products/SuggestedMeals";
import { MealData } from "@/lib/interfaces";
import { getRandomMeals } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
}

const DummyData = {
  mealData: {
    title: "Autumn Bowl",
    price: 16.99,
    imagePath: "/images/collections/autumn-bowl.webp",
    recipePath: "/images/collections/autumn-bowl-recipe.webp",
    description:
      "Enjoy this delicious ready to eat meal anytime! Oven baked seasoned chicken with roasted sweet potatoes, Brussels sprouts, sautéed apples and onions, and crispy bacon. Take your meal prep to the next level with this delicious protein packed meal!",
    noModifications: true,
    beverageImageContainer: false,
  },
  images: [
    { path: "/images/collections/autumn-bowl.webp", isRecipe: false },
    { path: "/images/collections/autumn-bowl-recipe.webp", isRecipe: true },
  ],
};

const AutumnBowl = ({ meals }: P) => {
  return (
    <>
      <MealProductInfo productData={DummyData} />
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
