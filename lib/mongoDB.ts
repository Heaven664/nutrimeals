import { MongoClient } from "mongodb";
import { MealData } from "./interfaces";

const ConnectDatabase = async () => {
  const databaseName = process.env.DATABASE_NAME;
  const databaseUser = process.env.DATABASE_USER;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const uri = `mongodb+srv://${databaseUser}:${databasePassword}${databaseName}.jgbnfdc.mongodb.net/`;

  return new MongoClient(uri);
};

export async function getAllDinnerAndLunchMeals() {
  const client: MongoClient = await ConnectDatabase();

  let meals: MealData[];

  try {
    const cursor = client.db("nutrimeals").collection("meals").find();
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

export async function getAllBreakfastMeals() {
  const client: MongoClient = await ConnectDatabase();

  let meals: MealData[];

  try {
    const cursor = client.db("nutrimeals").collection("breakfast").find();
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
