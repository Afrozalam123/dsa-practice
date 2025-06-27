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


// leetcode qn0=14 easy

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


function longestcommonprefix(str){   // function name is longest common prfix//
  let prefix=str[0]  // prefix is variable and str[0] is find string ka pehla index//
  for(let i=0;i<str.length;i++){  // starting the loop//
    while(str[i].indexOf(prefix) !==0) {  // now while loop indexOf prefix ye letter ya word kisi position mein hai//
      prefix=prefix.slice(0,-1) // prefix =prefix slice ek array ka tukda nikalta hai
      if(prefix===""){  // ye condition check krta hai//
        return "";  // ye return krga//
      }
    }
  }
  return prefix;  //ye return  prefix krega prefix str[0]
}
let str=["flower","flow","flight"]   //  ye Array ke ander string hai// 
console.log(longestcommonprefix(str))  // ye function call krega and argumeent passing krega







