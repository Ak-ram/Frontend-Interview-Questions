
const mySqrt = (x) => {
  if (x <= 1) return x;
  for (let i = 2; i <= x; i++) {
    if (i * i === x) return i;
    if (i * i > x) return i - 1;
  }
};
console.log(mySqrt(8)) // 2