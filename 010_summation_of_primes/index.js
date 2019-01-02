let start = new Date().getTime();

let i=2
let primeArr=[];
let sum = 0;

const isPrimeFactor = (value) => {
    return primeArr.every(element => value % element !== 0);
}

while(i <= 2000000) {
    if (i % 100000 === 0) {
        console.log(i/20000 + '% ...');
    }
    if (isPrimeFactor(i)) {
        primeArr.push(i);
        // sum += i;
    }
    i++;
}
let tmp = new Date().getTime();
console.log("Après while : " + (tmp - start) + " ms");


let sumTot = primeArr.reduce((acc, curVal) => acc + curVal);
console.log(sum);
let end = new Date().getTime();
console.log("Time : " + (end - start) + " ms");