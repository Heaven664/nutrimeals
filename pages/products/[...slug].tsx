import { GetStaticPropsContext } from "next";
import MealProductInfo from "@/components/products/MealProductInfo";
import SuggestedMeals from "@/components/products/SuggestedMeals";
import { MealData, ProductData } from "@/lib/interfaces";
import { getRandomMeals, findProductBySlug } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
  product: ProductData | null;
  error: boolean;
}

const Meal = ({ meals, product }: P) => {
  if (!product) {
    return <div>No Product</div>;
  }

  return (
    <>
      <MealProductInfo productData={product} />
      <SuggestedMeals
        meals={meals}
        collectionName={product.mealData.collectionName}
        isBeverage={product.mealData.beverageImageContainer}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string[] }>
) => {
  const { slug } = context.params || { slug: [] };

  let meals: MealData[];
  let product: ProductData | null = null;
  let error = false;

  try {
    if (Array.isArray(slug)) {
      product = await findProductBySlug("products-meals", slug[0]);
    }
    meals = await getRandomMeals(
      product?.mealData.collectionName || "meals",
      4
    );
  } catch (err) {
    meals = [];
    error = true;
    console.log(err);
  }

  return {
    props: { meals, product, error },
  };
};

export default Meal;
