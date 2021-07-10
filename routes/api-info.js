const express = require("express");
const router = express.Router();
const { getInfo } = require("../controllers/api-info");

router.get("/info", getInfo);

module.exports = router;