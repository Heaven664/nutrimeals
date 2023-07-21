import CollectionFilter from "@/components/collections/CollectionFilter";
import CollectionTitle from "@/components/collections/CollectionTitle";
import CollectionsList from "@/components/collections/CollectionsList";
import { getDummyCollections } from "@/dummy-collections";
import { MongoClient } from "mongodb";

interface MealData {
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
  const databaseName = process.env.DATABASE_NAME;
  const databaseUser = process.env.DATABASE_USER;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const uri = `mongodb+srv://${databaseUser}:${databasePassword}${databaseName}.jgbnfdc.mongodb.net/`;

  const client = new MongoClient(uri);

  let meals;
  try {
    const collection = client.db("nutrimeals").collection("meals");
    const cursor = collection.find();
    const allMeals = await cursor.toArray();
    meals = allMeals.map((meal) => ({
      ...meal,
      _id: meal._id.toString(),
    }));
    console.log(meals);
  } catch (err) {
    console.log("error", err);
  } finally {
    await client.close();
  }

  return {
    props: { meals },
  };
}

export default LunchAndDinnerCollection;
