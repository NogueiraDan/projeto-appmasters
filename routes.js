const express = require("express");
const router = express.Router();

// Rotas da API
router.get("/", (req, res) => {
  res.status(200).json({ alive: "true" });
});

module.exports = router;
