/* eslint-disable max-len */
import conn from "../database";
import { AppError } from "../middlewares/handleAppError.middleware";

export const ContactsModel = class {
  // Get All Users from the database
  getAllContacts = async () => {
    const sql = "SELECT * FROM contacts";
    conn.query(sql, (err, data, fields) => {
      if (err) {
        throw new AppError(`Cannot get All contacts ${err}`, 400);
      }
      console.log(data);
      return data;
    });
  };

  // Get One User
  //   getOneUser = async (user_id: string): Promise<UserModelProps[]> => {
  //     try {
  //       const sql = "SELECT user_id, firstname,lastname, email FROM users WHERE user_id=$1";
  //       const conn = await pgClient.connect();
  //       const result = await conn.query(sql, [user_id]);
  //       conn.release();
  //       return result.rows;
  //     } catch (error) {
  //       throw new AppError(`Cannot get One user ${error}`, 400);
  //     }
  //   };

  //   // DELETE USER
  //   deleteUser = async (user_id: string): Promise<UserModelProps[]> => {
  //     try {
  //       const sql = "DELETE FROM users WHERE user_id=$1";
  //       const conn = await pgClient.connect();
  //       const result = await conn.query(sql, [user_id]);
  //       conn.release();
  //       return result.rows;
  //     } catch (error) {
  //       throw new AppError(`Cannot delete user ${error}`, 400);
  //     }
  //   };

  //   // UPDATE USER
  //   updateUserInfo = async (user: UpdateUserProps): Promise<UserModelProps[]> => {
  //     try {
  //       const sql =
  //         // eslint-disable-next-line max-len
  //         "UPDATE users SET firstname=$1, lastname=$2, email=$3 WHERE user_id = $4 RETURNING user_id, firstname,lastname,email";

  //       const conn = await pgClient.connect();

  //       const result = await conn.query(sql, [user.firstname, user.lastname, user.email, user.user_id]);

  //       conn.release();
  //       return result.rows;
  //     } catch (error) {
  //       throw new AppError(`Cannot update user ${error}`, 400);
  //     }
  //   };
};
