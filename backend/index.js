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

// function checkToken(req, res) {
// get authcookie from request
//   const authcookie = req.cookies.authcookie;

// verify token which is in cookie value
//   jwt.verify(authcookie, "jwtkey", (err, data) => {
//     if (err) {
//       res.sendStatus(403);
//     } else if (data.user) {
//       req.user = data.user;
//     }
//   });
// }

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.get("/test", (req, res) => {
// res.json("It works");
// console.log(req.cookies);
// res.send(req.cookies);
// console.log(req.params);
// res.send(req.params);
// });

app.listen(8800, () => {
  console.log("Connected to port 8800");
});
