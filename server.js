const app = require("express")();
const routes = require("./routes");

// Middleware de chamada às rotas da API
app.use("/", routes);

module.exports = app;
