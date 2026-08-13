import { MongoClient  } from "mongodb";
import {env} from "./env.js"

 export const dbclient = new MongoClient(env.MONGODB_URL)

 await dbclient.connect();

 console.log("mogodb connected");
 