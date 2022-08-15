import supertest from "supertest";
import app from "../../app";

const request = supertest(app);
describe("Contact Endpoint Tests", () => {
  const contact = {
    first_name: "Godswill",
    last_name: "Edet",
    email: "gimm@gmail.com",
    mobile_number: "09011207786",
    data_store: "DATABASE",
  };

  it("should create a contact", async () => {
    const response = await request.post("/api/contacts").send(contact);
    expect(response.status).toBe(201);
  });

  it("should get a contact", async () => {
    const response = await request.get("/api/contacts/1");
    expect(response.status).toBe(200);
  });

  it("should get all contacts", async () => {
    const response = await request.get("/api/contacts");
    expect(response.status).toBe(200);
  });

  it("should update a contact", async () => {
    const response = await request
      .put("/api/contacts/1")
      .send({ email: "chris@gmail.com", mobile_number: "1234", data_store: "DATABASE" });
    expect(response.status).toBe(200);
  });

  it("should delete a contact", async () => {
    const response = await request.delete("/api/contacts/1").send({ data_store: "DATABASE" });
    expect(response.status).toBe(204);
  });
});
