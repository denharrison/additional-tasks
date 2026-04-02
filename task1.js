const nums = [1, 2, 3, 4, 5, 6];

  let result = {
    even: 0,
    odd: 0,   
  };


const countEvenOdd = (nums) => {

    for (let i = 0; i <= nums.length; i++) {

        if (nums[i] % 2 === 0) {
            result.even++
            
        } else if (nums[i] % 2 !== 0) {
            result.odd++
            
        } else {
            continue
        }
    }
    
}

console.log(countEvenOdd(nums));
console.log(result)