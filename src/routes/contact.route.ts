import { Router } from "express";
import { catchAsync } from "../middlewares/catchAsyncError.middleware";
import {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getOneContacts,
} from "../controllers/contacts.controller";

const contactsRouter = Router();

contactsRouter.route("/").get(catchAsync(getAllContacts));
contactsRouter.route("/").post(catchAsync(createContact));
contactsRouter
  .route("/:id")
  .put(catchAsync(updateContact))
  .delete(catchAsync(deleteContact))
  .get(catchAsync(getOneContacts));

export default contactsRouter;
