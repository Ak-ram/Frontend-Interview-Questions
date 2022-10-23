var plusOne = function (digits) {
  const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
  return arr.map(Number);
};

Runtime: 67 ms
Memory Usage: 42 MB


We have to use the bigInt().

Because JS have a limited precision (2^53=9,007,199,254,740,992 for the biggest integer). And Test case [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3] has passed that limit. As we cross the limit, we have to call the bigInt() function to to do precise calculation. And we can not add 1 directly to a big-integer. The number has to be the same type. Therefore, we have to add 1 like - bigInt(1).