import { MongoClient } from "mongodb";
export let db: any;
export async function init() {
  try {
    // Connection URL
    const url = "mongodb://0.0.0.0:27017"; //mongodb://0.0.0.0:27017
    const dbName = "myProject";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log(`MongoDB Connected...${db}`);
    console.log(`MongoDB Connected...`);
  } catch (error) {
    console.log(`MongoDB ERROR...${error}`);
  }
}
