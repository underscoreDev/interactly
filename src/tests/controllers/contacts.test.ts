import supertest from "supertest";
import app from "../../app";

const request = supertest(app);
describe("Contact Endpoint Tests", () => {
  const contact = {
    first_name: "Godswill",
    lastname: "Edet",
    email: "gimmex1@gmail.com",
    mobile_number: "09011207786",
    data_store: "DATABASE",
  };

  it("should create a contact", async () => {
    const response = await request.post("/api/contact").send(contact);
    expect(response.status).toBe(201);
  });
});
