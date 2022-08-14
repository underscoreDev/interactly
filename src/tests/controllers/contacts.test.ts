import supertest from "supertest";
import app from "../../app";

const request = supertest(app);
describe("Contact Endpoint Tests", () => {
  let token: string;
  let id: string;

  const contact = {
    first_name: "Godswill",
    lastname: "Edet",
    email: "gimmex1@gmail.com",
    mobile_number: "09011207786",
  };

  beforeAll(async () => {
    // create a new user
    const response = await request.post("/api/contact").send(contact);
    // get the user token
    token = response.body.token;

    const res = await request.get("/api/v1/users").auth(token, { type: "bearer" });
    id = res.body.data.users[res.body.data.users.length - 1].id;
  });

  it("should get all users", async () => {
    const res = await request.get("/api/v1/users").auth(token, { type: "bearer" });
    expect(res.status).toBe(200);
    expect(res.body.data).toBeDefined();
  });

  it("should get one user", async () => {
    const res = await request.get(`/api/v1/users/${id}`).auth(token, { type: "bearer" });
    expect(res.status).toBe(200);
    expect(res.body.data.users[0].id).toBe(id);
  });

  it("should update a user", async () => {
    const res = await request.put(`/api/v1/users/${id}`).auth(token, { type: "bearer" });
    // .send({ ...user, id });
    expect(res.status).toBe(200);
  });

  it("should delete user", async () => {
    const res = await request.delete(`/api/v1/users/${id}`).auth(token, { type: "bearer" });
    expect(res.status).toBe(204);
  });
});
