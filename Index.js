// Input: nums = [2,2,1]
// Output: 1

function findSingleNumber(nums){
  let result=0;
  for(let i=0;i<nums.length;i++){
    result^=nums[i]
  }
  return result;
}
let nums1=[2,2,1]
let nums2=[4,1,2,1,2]
let nums3=[1]

console.log(findSingleNumber(nums1))
console.log(findSingleNumber(nums2))
console.log(findSingleNumber(nums3))