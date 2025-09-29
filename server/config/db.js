// database.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Get MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in your environment variables!");
  process.exit(1); // Stop execution
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully!");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1); // Stop execution if DB connection fails
});

// Optional: Listen to connection events
mongoose.connection.on("connected", () => {
  console.log("MongoDB event: Connected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB event: Connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB event: Disconnected");
});

// Export mongoose for using in other files
export default mongoose;
