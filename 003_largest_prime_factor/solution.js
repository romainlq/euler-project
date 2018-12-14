let start = new Date().getTime();
let valueToCheck = 13195 ;

let primeArray = [];

for (let i =1; i <= valueToCheck; i++) {
    if (i % i === 0 && valueToCheck % i === 0 ) {
        valueToCheck /= i;
        primeArray.push(i);
    }
}

console.log("Reponse :" + primeArray.pop())

// let end = new Date().getTime();
// console.log("Time : " + (end - start) + " ms");
