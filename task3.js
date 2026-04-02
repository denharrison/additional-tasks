const words = ["кот", "пёс", "кот", "кот", "пёс"];

const wordFreq = (array) => {

    let result = array.reduce((accum, value) => {
        accum[value] = (accum[value] || 0) + 1;
        return accum
    }, {})


    return result

}

console.log(wordFreq(words));    