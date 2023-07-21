import { MongoClient } from "mongodb";

const ConnectDatabase = async () => {
  const databaseName = process.env.DATABASE_NAME;
  const databaseUser = process.env.DATABASE_USER;
  const databasePassword = process.env.DATABASE_PASSWORD;
  const uri = `mongodb+srv://${databaseUser}:${databasePassword}${databaseName}.jgbnfdc.mongodb.net/`;

  return new MongoClient(uri);
};

export async function getAllDinnerAndLunchMeals() {
  const client: MongoClient = await ConnectDatabase();

  let meals;

  try {
    const collection = client.db("nutrimeals").collection("meals");
    const cursor = collection.find();
    const allMeals = await cursor.toArray();
    meals = allMeals.map((meal) => ({
      ...meal,
      _id: meal._id.toString(),
    }));
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }

  return meals;
}
