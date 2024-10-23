const fun1 = (x) => {
  if (x > 0) {
    return fun1(x - 1) + x;
  }

  return 0;
};

let x = 5;

console.log(fun1(x));
