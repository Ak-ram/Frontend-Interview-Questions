 var singleNumber = function(nums) {
    const count={};
    nums.forEach(element => {
   count[element] = (count[element] || 0) + 1;
 });
  
   return +Object.keys(count).find(key => count[key] === 1);
};

Runtime: 90 ms
Memory Usage: 46.4 MB