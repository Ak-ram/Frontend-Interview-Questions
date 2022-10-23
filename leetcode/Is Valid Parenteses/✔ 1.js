/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        let hashMap = {
            '(':')',
            '[':']',
            '{':'}'
        }
        
        let stack=[];
        
        for(let char of s){
          if(hashMap[char]) stack.push(hashMap[char])
        else{
            if(stack.pop() !== char) return false
        }
        }
          
    
    return !stack.length
};

console.log(isValid("(){}[]")) ; // true