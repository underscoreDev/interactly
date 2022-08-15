/* eslint-disable operator-linebreak */
import conn from "../database";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../middlewares/handleAppError.middleware";
import { AxiosClass } from "../middlewares/axios";
import { config } from "dotenv";
config();

const axiosRequest = new AxiosClass();

// CREATE CONTACT
export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;

  if (data_store === "CRM") {
    // CREATE CONTACT IN CRM
    const { data } = await axiosRequest.createContact({ first_name, last_name, email, mobile_number });
    return res.status(201).json({ status: "success", data });
  } else {
    // CREATE CONTACT IN DATABASE
    const sql = "INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?,?,?,?)";
    conn.query(sql, [first_name, last_name, email, mobile_number], (err, data) =>
      err
        ? next(new AppError(`Cannot create contact ${err}`, 400))
        : res.status(201).json({ status: "success", message: "Contact Created Successfully" })
    );
  }
};

// Get All Contacts
export const getAllContacts = async (req: Request, res: Response, next: NextFunction) => {
  const { data_store } = req.body;
  if (data_store === "CRM") {
    // GET ALL CONTACTS FROM CRM
    const { data } = await axiosRequest.getAllContacts();
    return res.status(200).json({ status: "success", data });
  } else {
    // GET ALL CONTACTS FROM DATABASE
    const sql = "SELECT * FROM contacts";
    conn.query(sql, (err, data) =>
      err
        ? next(new AppError(`Cannot get All contacts ${err}`, 400))
        : res.status(200).json({ status: "success", data: { contacts: data } })
    );
  }
};

// Get one Contact
export const getContact = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { data_store } = req.body;

  if (data_store === "CRM") {
    // GET ONE CONTACT FROM CRM
    const { data } = await axiosRequest.getContact(id);

    return res.status(200).json({ status: "success", data });
  } else {
    // GET ONE CONTACT FROM DATABASE
    const sql = "SELECT * FROM contacts WHERE id=?";
    conn.query(sql, [id], (err, data) =>
      err
        ? next(new AppError(`Cannot get One contact ${err}`, 400))
        : res.status(200).json({ status: "success", data: { contact: data } })
    );
  }
};

// UPDATE CONTACT
export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const { email, mobile_number, data_store } = req.body;
  const { id } = req.params;

  if (data_store === "CRM") {
    // update conTACT IN CRM
    const { data } = await axiosRequest.updateContact({ id, email, mobile_number });

    return res.status(200).json({ status: "success", data });
  } else {
    // UPDATE CONTACT IN DATABASE
    const sql = "UPDATE contacts SET email=?, mobile_number=? WHERE id=?";

    conn.query(sql, [email, mobile_number, id], (err, data) =>
      err
        ? next(new AppError(`Cannot update contact ${err}`, 400))
        : res.status(200).json({ status: "success", message: "Contact updated Successfully" })
    );
  }
};

// delete CONTACT
export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  const { data_store } = req.body;
  const { id } = req.params;

  if (data_store === "CRM") {
    // DELETE CONTACT FROM CRM
    const { data } = await axiosRequest.deleteContact(id);

    return res.status(204).json({ status: "success", data });
  } else {
    // DELETE CONTACT FROM DATABASE
    const sql = "DELETE FROM contacts WHERE id=?";

    conn.query(sql, [id], (err) =>
      err
        ? next(new AppError(`Cannot delete contact ${err}`, 400))
        : res.status(204).json({ status: "success", message: "Contact deleted Successfully" })
    );
  }
};
