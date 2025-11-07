const nums = [5, 1, 9, 3, 7];
const min = 3;
const max = 7;

const filterRange = (array, min, max) => {

    let result = array.reduce((accum, value, index) => {
    
    if (value >= min && value <= max) {
       accum.push(value)
    } 

    return accum

    }, [])

    return result
}

console.log(filterRange(nums, min, max));