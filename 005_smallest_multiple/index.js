const utils = require('../utils');

let start = new Date().getTime();

const isEvenlyDivisibleByAllValues = (valToTest, values) => {
    return values.every(element => valToTest % element === 0 );
}

let values = utils.generateArray(20);

let valToTest = 20;
let foundIt = false;

while (!foundIt) {
    if (isEvenlyDivisibleByAllValues(valToTest, values)) {
        console.log('FOUND IT : ' + valToTest)
        foundIt = true;
    }
    valToTest += 20;
}

let end = new Date().getTime();
console.log("Time : " + (end - start) + " ms");