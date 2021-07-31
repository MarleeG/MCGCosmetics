import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
const { log } = console;

export default {
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

    return [...uniqueArr, 'ALL'];
  }
};

// export default data;

// module.exports = data;
