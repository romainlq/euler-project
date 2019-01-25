let start = new Date().getTime();

const collatz = n => {
  nbIt++;
  if (n === 1) {
    return;
  }

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  return collatz(n);
};

var nbItMax = 0;
var nMax = 1;

var nbToTest = 1000000;

for (let i = 1; i < nbToTest; i++) {
  var nbIt = 0;
  if (i % 100000 === 0) {
    console.log((i / nbToTest) * 100 + '%');
  }
  collatz(i);
  if (nbIt > nbItMax) {
    nbItMax = nbIt;
    nMax = i;
  }
}

console.log('PLUS GROSSE VALEUR : ' + nMax);
console.log('NBIT : ' + nbItMax);
let end = new Date().getTime();
console.log('Time : ' + (end - start) + ' ms');
