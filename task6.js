const arr = [1, 2, 3, 4];

const manualReverse = (array) => {

    const n = array.length;
    for (let i = 0; i < n / 2; i++) {

      const temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
      
    }

    return array
}

console.log(manualReverse(arr));