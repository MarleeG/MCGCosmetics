const fetch = require("node-fetch");
const {apiBasicInfo} = require("./data");
const { log } = console;

const PRODUCT_TYPE_BASE_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=";

const makeupProductsAPI = {
  getAllProductsByType: (req, res) => {
    const PRODUCT_TYPE = req.params.product_type;
    // log(PRODUCT_TYPE);

    const FOUND_PRODUCT_TYPE = apiBasicInfo.find(
      (obj) => obj.api_product_type_value === PRODUCT_TYPE
    );

    if (FOUND_PRODUCT_TYPE) {
      const URL = `${PRODUCT_TYPE_BASE_URL}${PRODUCT_TYPE}`;

      fetch(URL, { method: "GET" })
        .then((res) => res.json())
        .then((json) => res.json(json));
    } else {
      res.json({ error: "This product is not an option." });
    }
  },
};

module.exports = makeupProductsAPI;