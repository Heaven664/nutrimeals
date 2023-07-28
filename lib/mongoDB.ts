import { MongoClient } from "mongodb";
import { MealData, ProductData } from "./interfaces";

const ConnectDatabase = async () => {
  const databaseName = process.env.DATABASE_NAME;
  const databaseUser = process.env.DATABASE_USER;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const uri = `mongodb+srv://${databaseUser}:${databasePassword}${databaseName}.jgbnfdc.mongodb.net/`;

  return new MongoClient(uri);
};

export async function getCollection(collectionName: string) {
  const client: MongoClient = await ConnectDatabase();

  let meals: MealData[];

  try {
    const cursor = client.db("nutrimeals").collection(collectionName).find();
    const allMeals = await cursor.sort({ title: 1 }).toArray();
    meals = allMeals.map(
      (meal) =>
        ({
          ...meal,
          _id: meal._id.toString(),
          date: meal.date.toISOString(),
        } as MealData)
    );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
  return meals;
}

export async function getRandomMeals(
  collectionName: string,
  mealsNumber: number
) {
  const client: MongoClient = await ConnectDatabase();

  let meals: MealData[];

  try {
    const cursor = client
      .db("nutrimeals")
      .collection(collectionName)
      .aggregate([{ $sample: { size: mealsNumber } }]);
    const allMeals = await cursor.toArray();
    meals = allMeals.map(
      (meal) =>
        ({
          ...meal,
          _id: meal._id.toString(),
          date: meal.date.toISOString(),
        } as MealData)
    );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
  return meals;
}

export async function findProductBySlug(
  collectionName: string,
  slug: string | undefined
) {

  const client: MongoClient = await ConnectDatabase();
  let product: ProductData;
  
  try {
    const query = { "mealData.slug": slug };
    let document = await client
      .db("nutrimeals")
      .collection(collectionName)
      .findOne(query);

    if (!document) {
      return null;
    }

    product = {
      _id: document._id.toString(),
      mealData: {
        ...document.mealData,
        date: document.mealData.date.toISOString(),
      },
      images: [...document.images],
    };
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }

  return product;
}
