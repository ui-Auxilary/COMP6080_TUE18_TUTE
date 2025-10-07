function currySum(f) {
  return function sumA(a) {
    return function sumB(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let currySumFunc = currySum(sum);
console.log(currySumFunc(1)(2));

const arrowCurry = (f) => (a) => (b) => {
  console.log(f(a, b));
};

arrowCurry(sum)(1)(2);
