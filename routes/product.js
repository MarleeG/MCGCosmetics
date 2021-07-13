const express = require("express");
const router = express.Router();

const { getAllProductsByType } = require("../controllers/product");

router.get("/:product_type", getAllProductsByType);

module.exports = router;
