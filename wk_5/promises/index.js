// Synchronous
const printB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
};

const printA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 1000);
  });
};

const printC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 3000);
  });
};

const promiseAll = Promise.all([printB(), printA(), printC()]);
console.log(promiseAll.then((data) => console.log(data)));
// Asycnhronous
