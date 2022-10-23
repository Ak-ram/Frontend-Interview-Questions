var isValid = function (s) {
  const dictinary = { ")": "(", "]": "[", "}": "{" };
  const arr = s.split("");

  return !arr.reduce((acc, curr) => {
    if (dictinary[curr] === acc[acc.length - 1] && acc) {
      return acc.slice(0, -1)
    }
    return acc + curr;
  })
};

console.log(isValid("(){}[]")) ; // true