let start = new Date().getTime();

let i=2
let primeArr=[];

const isPrimeFactor = (value) => {
    return primeArr.every(element => value % element !== 0);
}

while(primeArr.length <= 10000) {
    if (isPrimeFactor(i)) {
        primeArr.push(i);
    }
    i++;
}
console.log(primeArr.pop());
let end = new Date().getTime();
console.log("Time : " + (end - start) + " ms");