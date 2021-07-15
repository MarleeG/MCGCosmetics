const express = require("express");
const router = express.Router();
const { getInfo, getBrands } = require("../controllers/api-info");

router.get("/info", getInfo).get("/brands", getBrands);

module.exports = router;
