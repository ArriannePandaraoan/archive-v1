import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM posts WHERE category = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  // res.json("from controller");
  const q =
    "SELECT `username`, `title`, `description`, p.img, `category` FROM users u JOIN posts p On u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("add post");
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post deleted");
    });
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data[0]);
    });
  });
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
