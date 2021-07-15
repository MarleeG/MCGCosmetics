const { apiBasicInfo, brands } = require("./data");

const info = {
  getInfo: (req, res) => {
    res.json(apiBasicInfo);
  },
  getBrands: (req, res) => {
    res.json(brands)
  }
};

module.exports = info;
