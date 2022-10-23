
const isPalindrome = (x) =>{
    if(x<0) return false;
    x= x.toString(); //"12"
let x_reversed = [...x.toString()].reverse().join(""); // "21"
return x_reversed === x
    
};
console.log(isPalindrome(101))