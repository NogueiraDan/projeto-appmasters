const express = require("express");
const router = express.Router();
const appController = require("./controllers/appController");

// Rotas da API
router.get("/", appController.home);
router.post("/donation", appController.donation);

module.exports = router;
