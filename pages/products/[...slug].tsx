import { GetServerSidePropsContext } from "next";
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.query;

  let meals: MealData[];
  let product: ProductData | null = null;
  let error = false;

  try {
    meals = await getRandomMeals("meals", 4);
    if (Array.isArray(slug)) {
      product = await findProductBySlug("products-meals", slug[0]);
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
