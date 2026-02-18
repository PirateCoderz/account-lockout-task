import mongoose from "mongoose";

const DB_URI = process.env.DB_URI!;

if (!DB_URI) {
    throw new Error("Please define DB_URI in environment variables");
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
    global.mongooseCache = cached;
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(DB_URI).then((m) => m);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
