const twoSum = (nums, target) => {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      return [storage[num], index];
    }
    storage[target - num] = index;
  }
};

console.log(twoSum([1,2,3,4,2,6], 7)); // [2,3]
console.log(twoSum([3, 0, 3, 2], 6)); // [0,2]