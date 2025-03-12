import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://divyagauravdev:WI64RnuK1y9XNi6h@cluster0.7ncid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
declare global {
  var mongooseCache: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null };
}

global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

async function dbConnect() {
  if (global.mongooseCache.conn) return global.mongooseCache.conn;

  global.mongooseCache.promise ||= mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((m) => m.connection);

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}

export default dbConnect;