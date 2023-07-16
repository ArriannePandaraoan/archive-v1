import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  database: "archive",

  // host: "archive-db-test.cpio0q2g6rmm.ap-southeast-1.rds.amazonaws.com",
  // user: "admin",
  // password: "archivev1",
  // database: "archive-db-test",
});
