const nums = [10, -3, 7, 0];

const minMax = (array) => {

let obj = {
    min: null,
    max: null,
}       

let maxNum = Math.max(...nums)
let minNum = Math.min(...nums);


if (nums.length === 0) {
   return obj 
} 

obj.max = maxNum
obj.min = minNum

return obj

}

console.log(minMax(nums))