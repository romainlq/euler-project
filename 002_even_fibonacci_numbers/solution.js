let sum = 0;
var prev = 1;
var current = 2;
let tmp=0;
let fibonacci = () => {
  tmp = current
  current += prev
  prev = tmp
}

while (current < 4000000) {
  if (current % 2 === 0) {
    sum += current;
  }
  fibonacci(prev, current);
}

console.log(sum);