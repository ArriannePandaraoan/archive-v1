import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// const headers = {
//   "Content-Type": "application/json",
// };

//MIDDLEWARE

const app = express();
const c = cors();

app.use(express.json());
app.use(c);
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.get("/test", (req, res) => {
//   res.json("It works");
// });

app.listen(8800, () => {
  console.log("Connected to port 8800");
});
