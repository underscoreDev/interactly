/* eslint-disable operator-linebreak */
import conn from "../database";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../middlewares/handleAppError.middleware";

// CREATE CONTACT
export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, email, mobile_number } = req.body;

  const sql = "INSERT INTO contacts(first_name, last_name, email, mobile_number) VALUES (?,?,?,?)";

  conn.query(sql, [first_name, last_name, email, mobile_number], (err, data) =>
    err
      ? next(new AppError(`Cannot create contact ${err}`, 400))
      : res.status(201).json({ status: "success", message: "Contact Created Successfully" })
  );
};

// Get All Contacts
export const getAllContacts = async (_req: Request, res: Response, next: NextFunction) => {
  const sql = "SELECT * FROM contacts";
  conn.query(sql, (err, data) =>
    err
      ? next(new AppError(`Cannot get All contacts ${err}`, 400))
      : res.status(200).json({ status: "success", data: { contacts: data } })
  );
};

// Get All Contacts
export const getOneContacts = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const sql = "SELECT * FROM contacts WHERE id=?";
  conn.query(sql, [id], (err, data) =>
    err
      ? next(new AppError(`Cannot get One contact ${err}`, 400))
      : res.status(200).json({ status: "success", data: { contact: data } })
  );
};

// UPDATE CONTACT
export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, email, mobile_number } = req.body;
  const { id } = req.params;

  const sql = "UPDATE contacts SET first_name=?, last_name=?, email=?, mobile_number=? WHERE id=?";

  conn.query(sql, [first_name, last_name, email, mobile_number, id], (err, data) =>
    err
      ? next(new AppError(`Cannot update contact ${err}`, 400))
      : res.status(200).json({ status: "success", message: "Contact updated Successfully" })
  );
};

// delete CONTACT
export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const sql = "DELETE FROM contacts WHERE id=?";

  conn.query(sql, [id], (err, data) =>
    err
      ? next(new AppError(`Cannot delete contact ${err}`, 400))
      : res.status(204).json({ status: "success", message: "Contact deleted Successfully" })
  );
};
