const romanToInt = (s) => {
  let ref = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = 0;
  s.split("").forEach((num, i) => {
    if (ref[num] < ref[s[i + 1]]) res -= ref[num];
    else res += ref[num];
  });
  return res;
};

console.log(romanToInt("II"));