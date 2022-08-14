import { config } from "dotenv";
import app from "./app";
import conn from "./database";
import { AppError } from "./middlewares/handleAppError.middleware";
config();

const { LOCAL_HOST, LOCAL_HOST_PORT } = process.env;

const PORT: string = LOCAL_HOST_PORT || "8900";
const HOST: string = LOCAL_HOST || "localhost";

app.listen(PORT, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
  conn.connect((err) => {
    if (err) {
      throw new AppError(`Cannot connect to database ${err}`, 500);
    }
    console.log("Database Connected");
  });
});
