const items = [
  { city: "Moscow", name: "Иван" },
  { city: "SPb", name: "Оля" },
  { city: "Moscow", name: "Анна" },
];

const key = "city"; 

const groupBy = (array, key) => {


    let result = array.reduce((accum, value) => {

        const groupKey = value[key]; 

        if (!accum[groupKey]) {
          accum[groupKey] = [];
        }

        accum[groupKey].push(value);

        return accum
    }, {}) 


    return result   
}

console.log(groupBy(items, key));