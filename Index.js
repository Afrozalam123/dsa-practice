// // Input: nums = [2,2,1]
// // Output: 1

// function findSingleNumber(nums){
//   let result=0;
//   for(let i=0;i<nums.length;i++){
//     result^=nums[i]
//   }
//   return result;
// }
// let nums1=[2,2,1]
// let nums2=[4,1,2,1,2]
// let nums3=[1]

// console.log(findSingleNumber(nums1))
// console.log(findSingleNumber(nums2))
// console.log(findSingleNumber(nums3))


// // leetcode qn0=14 easy

// // Input: strs = ["flower","flow","flight"]
// // Output: "fl"


// function longestcommonprefix(str){   // function name is longest common prfix//
//   let prefix=str[0]  // prefix is variable and str[0] is find string ka pehla index//
//   for(let i=0;i<str.length;i++){  // starting the loop//
//     while(str[i].indexOf(prefix) !==0) {  // now while loop indexOf prefix ye letter ya word kisi position mein hai//
//       prefix=prefix.slice(0,-1) // prefix =prefix slice ek array ka tukda nikalta hai
//       if(prefix===""){  // ye condition check krta hai//
//         return "";  // ye return krga//
//       }
//     }
//   }
//   return prefix;  //ye return  prefix krega prefix str[0]
// }
// let str=["flower","flow","flight"]   //  ye Array ke ander string hai// 
// console.log(longestcommonprefix(str))  // ye function call krega and argumeent passing krega

// qn0=3 find largest number given the array

// let arr=[2,3,9,15,19,50]

function longestnumber(nums){    // function name is longest number//
  let max=nums[0]  // max name ka variable hai nums[o] nums ka index 0 hai matlab 2;
  for(let i=1;i<nums.length;i++){ // for loop hai jo 1 se lekar nums ka length tak chalega ise3 tak chalega//
    if(nums[i]>max){ // ye condition check krega nums[i]>agr bada hai max se //
      max=nums[i]  // max =nums[i] jo bda hai usko bahar kijiye to
    }
  }
  return max;  // rturn max kr dijiye//
}
let nums=[2,3,45]  //nums ke anderarray hai array ke ande value hai
console.log(longestnumber(nums))  // and function call hta argument nums hai







