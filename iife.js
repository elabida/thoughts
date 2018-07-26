const delay = 1000;

const _add = function(a, b) { return a + b;};
const _sub = function(a, b) { return a - b;};
const _div = function(a, b) { return (b !== 0) ? (a / b) : null;};
const _mul = function(a, b) { return a * b;};

const _max = function(a, b) { return (a > b) ? a : b;};
const _min = function(a, b) { return (a < b) ? a : b;};

(function(cb) {
  setTimeout(() => {
    const a = 11, b = 23;
    console.log(cb(a, b));
  }, delay);
})(_max); // give as param what ever function you want.. // ob es sprachlich so richtig ist :-)
