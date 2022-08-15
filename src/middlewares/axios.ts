import axios from "axios";
import { config } from "dotenv";
import { ContactsProps, UpdateContactsProps } from "../interface";
config();

export const AxiosInstance = axios.create({
  baseURL: "https://none-478896868246366170.myfreshworks.com/crm/sales",
  //   prettier-ignore
  headers: { "Authorization": `Token token=${process.env.API_KEY}`, "Content-Type": "application/json" },
});

export const AxiosClass = class {
  // get all contact
  getAllContacts = () =>
    AxiosInstance({
      url: "/api/contacts/view",
      method: "get",
    });

  // get one contact
  getContact = (id: string) =>
    AxiosInstance({
      url: `/api/contacts/${id}`,
      method: "get",
    });

  // create contact
  createContact = (contact: ContactsProps) =>
    AxiosInstance({
      url: "/api/contacts",
      method: "post",
      data: { contact: { ...contact } },
    });

  // update contact
  updateContact = (contact: UpdateContactsProps) =>
    AxiosInstance({
      method: "put",
      url: `/api/contacts/${contact.id}`,
      data: { contact: { email: contact.email, mobile_number: contact.mobile_number } },
    });

  // delete contact
  deleteContact = (id: string) => AxiosInstance({ method: "delete", url: `/api/contacts/${id}` });
};
