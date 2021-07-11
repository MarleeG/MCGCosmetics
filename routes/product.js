const express = require("express");
const router = express.Router();

const {
  getAllBlushProducts,
  getAllBronzerProducts,
  getAllEyebrowProducts,
  getAllEyelinerProducts,
  getAllEyeshadowProducts,
  getAllFoundationProducts,
  getAllLiplinerProducts,
  getAllLipstickProducts,
  getAllNailPolishProducts,
  getAllMascaraProducts
} = require("../controllers/product");

router
  .get("/blush", getAllBlushProducts)
  .get("/bronzer", getAllBronzerProducts)
  .get("/eyebrow", getAllEyebrowProducts)
  .get("/eyeliner", getAllEyelinerProducts)
  .get("/eyeshadow", getAllEyeshadowProducts)
  .get("/foundation", getAllFoundationProducts)
  .get("/lip_liner", getAllLiplinerProducts)
  .get("/lipstick", getAllLipstickProducts)
  .get("/mascara", getAllMascaraProducts)
  .get("/nail_polish", getAllNailPolishProducts);

module.exports = router;
