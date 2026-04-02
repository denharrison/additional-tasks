const arr = [1, 2, 3, 4];

const manualReverse = (array) => {

    const n = array.length;
    for (let i = 0; i < n / 2; i++) {

      const temp = array[i]; // temp = 1 
      array[i] = array[n - 1 - i]; // array[0] = array[4 - 1 - 0] (3) array[0] = 3 следовательно 4 (по индексам считаем)
      array[n - 1 - i] = temp; // array[3] = 1 - тут мы меняем 3 индекс на единичку

    }

    return array
}

console.log(manualReverse(arr));