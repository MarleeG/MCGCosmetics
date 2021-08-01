import { v4 as uuidv4 } from "uuid";
import { randomColor } from "randomcolor";
// const { v4: uuidv4 } = require('uuid');
const { log } = console;

const data = {
  getHomePageDropDownValues: () => {
    const dropdownOptions = [
      {
        id: uuidv4(),
        label: "Products",
        value: "Products",
      },
      { id: uuidv4(), label: "Brands", value: "Brands" },
    ];

    return dropdownOptions;
  },

  getFirstCharacters: (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let { name } = arr[i];
      newArr.push(name[0]);
    }

    const uniqueArr = Array.from(new Set(newArr)).sort((a, b) => a + b);

    return [...uniqueArr, "ALL"];
  },
  ranColor: () => {
    const hues = ['pink', 'purple', 'blue'];
    const randomHue = hues[Math.floor(Math.random() * hues.length)];

     const color = randomColor({
      luminosity: "light",
      format: "rgba",
      alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
      hue: randomHue
    });

    return color;
  },
};

export default data;

// module.exports = data;
