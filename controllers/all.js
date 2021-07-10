const fetch = require("node-fetch");

const PRODUCT_TYPE_BASE_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=";




const makeupProductsAPI = {
  all: {
    getAllProductsByType: (req,res) => {
      const PRODUCT_TYPE = req.params.product_type;
      // const URL = `${PRODUCT_TYPE_BASE_URL}${PRODUCT_TYPE}`;

      // switch(PRODUCT_TYPE){

      // }
    },
    getAllBlushProducts: (req, res) => {
      // blush
      const URL = `${PRODUCT_TYPE_BASE_URL}blush`;

      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },

    getAllBronzerProducts: (req, res) => {
      // bronzer
      const URL = `${PRODUCT_TYPE_BASE_URL}bronzer`;

      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllEyebrowProducts: (req, res) => {
      // .eyebrow
      const URL = `${PRODUCT_TYPE_BASE_URL}eyebrow`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllEyelinerProducts: (req, res) => {
      // eyeliner
      const URL = `${PRODUCT_TYPE_BASE_URL}eyeliner`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllEyeshadowProducts: (req, res) => {
      // eyeshadow
      const URL = `${PRODUCT_TYPE_BASE_URL}eyeshadow`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllFoundationProducts: (req, res) => {
      // foundation
      const URL = `${PRODUCT_TYPE_BASE_URL}foundation`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllLiplinerProducts: (req, res) => {
      // lip liner
      const URL = `${PRODUCT_TYPE_BASE_URL}lip_liner`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllLipstickProducts: (req, res) => {
      // lipstick
      const URL = `${PRODUCT_TYPE_BASE_URL}lipstick`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllMascaraProducts: (req, res) => {
      // mascara
      const URL = `${PRODUCT_TYPE_BASE_URL}mascara`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
    getAllNailPolishProducts: (req, res) => {
      // nail polish
      const URL = `${PRODUCT_TYPE_BASE_URL}nail_polish`;
      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    },
  },
};

module.exports = makeupProductsAPI;
