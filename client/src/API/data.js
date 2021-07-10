const axios = require("axios");
const production = "https://mcg-cosmetics.herokuapp.com";
const development = "http://localhost:5000";

const BASE_URL =
  process.env.NODE_ENV === "production" ? production : development;

const data = {
  getAPIInfo: () => {
    const URL = `${BASE_URL}/api/info`;
    console.log(URL);
    return axios.get(URL);
  }
};

module.exports = data;