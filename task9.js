const chars = ["т", "о", "п", "о", "т"];
 
function isPalindromeArray(arr) {

    let left = 0
    let right = arr.length - 1 

    for (let i = left; i < right; i++) {
        
        if (arr[left] !== arr[right]) {
            return false
        } else {
            
        left++
        right--

        }

    }

    return true

}

console.log(isPalindromeArray(chars));