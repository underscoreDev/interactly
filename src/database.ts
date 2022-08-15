import mysql from "mysql";
import { config } from "dotenv";
config();

const { NODE_ENV, MYSQL_USER, MYSQL_PORT, MYSQL_DEV_DB, MYSQL_TEST_DB, MYSQL_PASSWORD } = process.env;

const conn = mysql.createConnection({
  port: Number(MYSQL_PORT),
  password: MYSQL_PASSWORD,
  user: MYSQL_USER,
  database: NODE_ENV === "dev" ? MYSQL_DEV_DB : MYSQL_TEST_DB,
});

export default conn;
