import { GetStaticPropsContext } from "next";
import MealProductInfo from "@/components/products/MealProductInfo";
import SuggestedMeals from "@/components/products/SuggestedMeals";
import { MealData, ProductData } from "@/lib/interfaces";
import { getRandomMeals, findProductBySlug } from "@/lib/mongoDB";

interface P {
  meals: MealData[];
  product: ProductData;
  error: boolean;
}

const AutumnBowl = ({ meals, product, error }: P) => {
  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <MealProductInfo productData={product} />
      <SuggestedMeals meals={meals} collectionName="lunch and dinner" />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
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
    meals = await getRandomMeals("meals", 4);
    if (Array.isArray(slug)) {
      product = await findProductBySlug("products-meals", slug[0]);
    }
    if (!product) {
      error = true;
    }
  } catch (err) {
    meals = [];
    error = true;
    console.log(err);
  }

  return {
    props: { meals, product, error },
  };
};

export default AutumnBowl;
