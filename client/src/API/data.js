const axios = require("axios");
const PRODUCTION_URL = "https://mcg-cosmetics.herokuapp.com";
const PRODUCTION_ENV_STR = "production";
let development = "http://localhost:5000";

// ONLY FOR DEV ENVIRONMENT
if (process.env.NODE_ENV !== PRODUCTION_ENV_STR) {
  if (process.platform !== "darwin") {
    development = "http://10.0.0.97:5000";
  }
}

const BASE_URL =
  process.env.NODE_ENV === PRODUCTION_ENV_STR ? PRODUCTION_URL : development;

const data = {
  getAPIInfo: () => {
    const URL = `${BASE_URL}/api/info`;
    return axios.get(URL);
  },
  getBrands: () => {
    const URL = `${BASE_URL}/api/brands`;
    return axios.get(URL);
  }
};

module.exports = data;