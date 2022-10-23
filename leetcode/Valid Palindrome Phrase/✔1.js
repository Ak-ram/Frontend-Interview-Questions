const isPalindrome = (s)=> {
  let filteredS = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let reversedS = [...filteredS].reverse().join('');
  return reversedS === filteredS
};
console.log(isPalindrome(' '))


Runtime: 74 ms
Memory Usage: 46.3 MB