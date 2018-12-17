let start = new Date().getTime();

const isPal = (valueToTest) => {
    let inversedVal = valueToTest.split('').reverse().join('');
    return valueToTest === inversedVal
}

let biggestPal=0;
let actualValue
for(let i = 999; i>=100; i--) {
    for (let j = 998; j >= 100; j--) {
        actualValue = i * j
        if (isPal(actualValue.toString()) && (biggestPal < actualValue)) {
            biggestPal = actualValue
        }
    }
}

console.log(biggestPal);

let end = new Date().getTime();
console.log("Time : " + (end - start) + " ms");