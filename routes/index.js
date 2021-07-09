const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const {
  all: {
    getAllBlushProducts,
    getAllBronzerProducts,
    getAllEyebrowProducts,
    getAllEyelinerProducts,
    getAllEyeshadowProducts,
    getAllFoundationProducts,
    getAllLiplinerProducts,
    getAllLipstickProducts,
    getAllNailPolishProducts,
    getAllMascaraProducts,
  },
} = require("../controllers/index");

router
  .get("/all/blush", getAllBlushProducts)
  .get("/all/bronzer", getAllBronzerProducts)
  .get("/all/eyebrow", getAllEyebrowProducts)
  .get("/all/eyeliner", getAllEyelinerProducts)
  .get("/all/eyeshadow", getAllEyeshadowProducts)
  .get("/all/foundation", getAllFoundationProducts)
  .get("/all/lip_liner", getAllLiplinerProducts)
  .get("/all/lipstick", getAllLipstickProducts)
  .get("/all/mascara", getAllMascaraProducts)
  .get("/all/nail_polish", getAllNailPolishProducts);

module.exports = router;
