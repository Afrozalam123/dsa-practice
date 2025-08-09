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


// // // leetcode qn0=14 easy

// // // Input: strs = ["flower","flow","flight"]
// // // Output: "fl"


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

// // qn0=3 find largest number given the array

// // let nums=[2,3,9,15,19,50]

// function longestnumber(nums){    // function name is longest number//
//   let max=nums[0]  // max name ka variable hai nums[o] nums ka index 0 hai matlab 2;
//   for(let i=1;i<nums.length;i++){ // for loop hai jo 1 se lekar nums ka length tak chalega ise3 tak chalega//
//     if(nums[i]>max){ // ye condition check krega nums[i]>agr bada hai max se //
//       max=nums[i]  // max =nums[i] jo bda hai usko bahar kijiye to
//     }
//   }
//   return max;  // rturn max kr dijiye//
// }
// let nums=[2,3,9,15,19,50]  //nums ke anderarray hai array ke ande value hai
// console.log(longestnumber(nums))  // and function call hta argument nums hai


// qn0=1295
// Input: nums = [12,345,2,6,7896]
// Output: 2

// function findNumber(num){   // function Name is findNumber //
//   let count=0;  // let count is variable and value was 0;
//   for(let i=0;i<num.length;i++){  // and starting the loop and 0 se lekar num ka length tak chelega 0<5 tak chalega//
//     let digit=num[i].toString().length // let digit name ka variable banaye digit=nums[i] and string mein convert kiye hai//
//     if(digit%2===0){ // and ye condition lagaye jo number 2 se dividible hai hai usko count ++ kr dijiye ga//
//       count++  // count++ ho jayega//
//     }
//   }
//   return count; // and return count kr dijiyega//
// }
// let num=[12,345,2,6,7896]  // and array ke ander number hai//
// console.log(findNumber(num)) // function was call and num is argument 


// function findlongestnumber(num){
//   let max=num[0];
//    for(let i=1;i<num.length;i++){
//     if(num[i]>max){
//       max=num[i]
//     }
//    }
//    return max;
// }
// let num=[1,23,4]
// console.log(findlongestnumber(num))



// function longestnumber(num){
//   let max=num[0];
//   for(let i=0;i<num.length;i++){
//     if(num[0]>max){
//       max=num[i]
//     }
//   }
//   return max;
// }
// let num=[12,9,8,10]
// console.log(longestnumber(num))

// Input: nums = [12,345,2,6,7896]
// Output: 2


// function longestcommonprefix(str){
//   let prefix=str[0]
//   for(let i=0;i<str.length;i++){
//     while(str[i].indexOf(prefix) !==0){
//       prefix=prefix.slice(0,-1)
//       if(prefix===""){
//         return "";
//       }
//     }
//   }
//   return prefix;
// }
// let str=["flower","flow","flight"]
// console.log(longestcommonprefix(str))

// function findlongestnumber(nums){
//   let max=nums[0]
//   for(let i=0;i<nums.length;i++){
//     if(max<nums[i]){
//       max=nums[i]
//     }
//   }
//   return max;
// }
// let nums=[2,2,1,5,6,9]
// console.log(findlongestnumber(nums))

// let person={
//   name:"Afroz",
//   age:"22",
//   fatherName:"Mohammad Afroz",
//   mothername:"Nilu Perween",
//   brothername:"FaizanAlam",
//   ElderbrotherName:"Md Danish Alam",


// }
// console.log(person)
// console.log(person.age)
// console.log(Object.keys(person))
// console.log(Object.values(person))

// let person={
//   Name:"Afroz",
//   Age:20,
//   Education:"Diploma passing",
// }
// localStorage.setItem.setItem(Name)


// function findlargestnumber(num){
//   let max=num[0]
//   for(let i=0;i<num.length;i++){
//     if(max>num[0]){
//       max=num[i]
//     }
//   }
//   return max;
// }
// let num=[9,8,3,12]
// console.log(findlargestnumber(num))


// let str="madam"

// function ispalindrome(str){
//   let reversed=str.split('').reverse().join("")
//   if(reversed===str){
//     console.log(`${str} is palindrome`)
//   }else{
//     console.log(`${str} not palindrome `)
//   }

// }
// let str="madam"
// ispalindrome(str)


// function findlargestnumber(num){
//   let max=num[0]
//   for(let i=0;i<num.length;i++){
//     if(max<num[i]){
//       max=num[i]
//     }
//   }
//   return max
// }

// let num=[12,3,5,8,7]
// console.log(findlargestnumber(num))


// function findsmallestnumber(num){
//   let smallest=num[0]
//   for(let i=0;i<num.length;i++){
//     if(smallest>num[i]){
//       smallest=num[i]
//     }
//   }
//   return smallest;
// }
// let num=[12,3,7,8,4,1]
// console.log(findsmallestnumber(num))


// function findlargestnumber(num){
//   let max=num[0]
//   for(let i=0;i<num.length;i++){
//     if(max<num[i]){
//       max=num[i]
//     }
//   }
//   return max;
// }
// let num=[1,2,3,4,9,12,15]
// console.log(findlargestnumber(num))


// let str="Hello";

function ispalindrome(str){
  let reversed=str.split('').reverse().join('')
  if(str===reversed){
   console.log(`${str} this is a palindrome`)
  }else{
    console.log(`${str} is not palindrome`)
  }
  return str;
}
let str="madam"

ispalindrome(str)