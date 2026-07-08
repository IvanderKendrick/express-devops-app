const request = require("supertest");

const app = require("../src/app");

describe("Application Endpoints", () => {
  test("GET /", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual({
      message: "Hello DevOps",
    });
  });

  test("GET /health", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual({
      status: "ok",
    });
  });
});
