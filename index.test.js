const app = require("./server");
const request = require("supertest");
describe("Testando server", () => {
  it("Acesso a resposta da rota inicial", async () => {
    const response = await request(app).get("/");
    expect(response.body.alive).toBeTruthy();
  });

  it("Acesso ao código da resposta", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });
});
