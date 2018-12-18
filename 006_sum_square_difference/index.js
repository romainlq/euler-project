const utils = require('../utils');

const sumOfTheSquare = (valArr) => {
    return valArr.reduce((acc, currVal) => acc + (currVal * currVal))
}
const squareOfTheSum = (valArr) => {
    let sum = valArr.reduce((acc, currVal) => acc + currVal);
    return sum * sum;
}

const getDiff = (valArr) => {
    var sumOfTheSquareVal = sumOfTheSquare(valArr);
    var squareOfTheSumVal = squareOfTheSum(valArr);
    return squareOfTheSumVal - sumOfTheSquareVal;
}

console.log(getDiff(utils.generateArray(100)))