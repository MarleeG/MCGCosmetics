const API_BASIC_INFO = require("./data");

const info = {
  getInfo: (req, res) => {
    res.json(API_BASIC_INFO);
  },
};

module.exports = info;
