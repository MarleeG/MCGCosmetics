const { log } = console;
const data = {
  getHomePageDropDownValues: () => {
    const dropdownOptions = [
      {
        label: "Products",
        value: "Products",
      },
      { label: "Brands", value: "Brands" },
    ];

    return dropdownOptions;
  },

  getFirstCharacters: (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let { name } = arr[i];
      newArr.push(name[0])
    }

    const uniqueArr = Array.from(new Set(newArr)).sort((a,b) => a+b);

    return uniqueArr;
  },
};

module.exports = data;
