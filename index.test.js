const app = require("./server");
const request = require("supertest");

describe("Testando rotas da API", () => {
  it("Deve acessar a resposta da rota inicial", async () => {
    const response = await request(app).get("/");
    expect(response.body.alive).toBeTruthy();
  });

  it("Deve acessar ao código da rota inicial", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });

  it("Deve faltar um campo no corpo da requisição", async () => {
    const response = await request(app)
      .post("/donation")
      .send({
        email: "daniel@gmail.com",
        phone: "(99) 99999-9999",
        zip: "00000-000",
        city: "City",
        state: "PB",
        streetAddress: "Rua das Tulipas",
        number: "90",
        complement: "Perto da Rua Flores",
        neighborhood: "Ao redor da praça central",
        deviceCount: 3,
        devices: [
          { type: "notebook", condition: "working" },
          { type: "desktop", condition: "notWorking" },
          { type: "netbook", condition: "notWorking" },
        ],
      });
    expect(response.statusCode).toEqual(400);
  });

  it("Deve enviar email inválido", async () => {
    const response = await request(app)
      .post("/donation")
      .send({
        name: "Daniel",
        email: "daniel",
        phone: "(99) 99999-9999",
        zip: "00000-000",
        city: "City",
        state: "PB",
        streetAddress: "Rua das Tulipas",
        number: "90",
        complement: "Perto da Rua Flores",
        neighborhood: "Ao redor da praça central",
        deviceCount: 3,
        devices: [
          { type: "notebook", condition: "working" },
          { type: "desktop", condition: "notWorking" },
          { type: "netbook", condition: "notWorking" },
        ],
      });
    expect(response.statusCode).toEqual(400);
  });

  it("Deve faltar os devices", async () => {
    const response = await request(app).post("/donation").send({
      name: "Daniel",
      email: "daniel@gmail.com",
      phone: "(99) 99999-9999",
      zip: "00000-000",
      city: "City",
      state: "PB",
      streetAddress: "Rua das Tulipas",
      number: "90",
      complement: "Perto da Rua Flores",
      neighborhood: "Ao redor da praça central",
      deviceCount: 3,
    });
    expect(response.statusCode).toEqual(400);
  });

  it("Deve enviar quantidade de devices diferente dos declarados", async () => {
    const response = await request(app)
      .post("/donation")
      .send({
        name: "Daniel",
        email: "daniel123@gmail.com",
        phone: "(99) 99999-9999",
        zip: "00000-000",
        city: "City",
        state: "PB",
        streetAddress: "Rua das Tulipas",
        number: "90",
        complement: "Perto da Rua Flores",
        neighborhood: "Ao redor da praça central",
        deviceCount: 0,
        devices: [
          { type: "notebook", condition: "working" },
          { type: "desktop", condition: "notWorking" },
          { type: "netbook", condition: "notWorking" },
        ],
      });
    expect(response.statusCode).toEqual(400);
  });

  it("Deve enviar dispositivo com type incorreto", async () => {
    const response = await request(app)
      .post("/donation")
      .send({
        name: "Daniel",
        email: "daniel",
        phone: "(99) 99999-9999",
        zip: "00000-000",
        city: "City",
        state: "PB",
        streetAddress: "Rua das Tulipas",
        number: "90",
        complement: "Perto da Rua Flores",
        neighborhood: "Ao redor da praça central",
        deviceCount: 3,
        devices: [
          { type: "typeIncorreto", condition: "working" },
          { type: "desktop", condition: "notWorking" },
          { type: "netbook", condition: "notWorking" },
        ],
      });
    expect(response.statusCode).toEqual(400);
  });

  it("Deve enviar todos os dados corretos", async () => {
    const response = await request(app)
      .post("/donation")
      .send({
        name: "Daniel",
        email: "daniel123@gmail.com",
        phone: "(99) 99999-9999",
        zip: "00000-000",
        city: "City",
        state: "PB",
        streetAddress: "Rua das Tulipas",
        number: "90",
        complement: "Perto da Rua Flores",
        neighborhood: "Ao redor da praça central",
        deviceCount: 3,
        devices: [
          { type: "notebook", condition: "working" },
          { type: "desktop", condition: "notWorking" },
          { type: "netbook", condition: "notWorking" },
        ],
      });
    expect(response.statusCode).toEqual(200);
  });
});
