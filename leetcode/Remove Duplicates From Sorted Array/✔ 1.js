const removeDuplicates = (nums)=> {
    let index = 1;
    for(let i=0; i<nums.length-1;i++){
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i+1]
            index++
        }
    }
    return index
};


console.log(removeDuplicates([1,1,2]))

Runtime: 78ms
Memory Storage: 44.5MB