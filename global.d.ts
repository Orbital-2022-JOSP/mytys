import { MongoClient } from "mongodb";
import type { mongoose } from "mongoose";

declare global {
    var mongoose: mongoose;
    var _mongoClientPromise: Promise<MongoClient>
}