const items = [
    
     { price: 100 },
     { cost: 50 }, 
     { price: 70 }, 
     { price: "NaN" } ];

const key = "price";

const sumByKey = (array, key) => {


    let result = array.reduce((accum, value) => {

        if (value[key] && value[key] !== 'NaN') {
          accum += value[key];
        } 

        return accum

    }, 0)

    return result

}

console.log(sumByKey(items, key));