const twoSum = (nums, target) => {
 const len = nums.length;
  for(let i =0; i<len;i++){
    const pair = nums.indexOf(target-nums.pop());
    if(pair !== -1) return [pair,len-1-i]
  }
  return []
};
 
console.log(twoSum([1,2,3,4,2,6], 7)); // [0,5]
console.log(twoSum([3, 0, 3, 2], 6)); // [0,2]