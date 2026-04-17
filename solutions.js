//* solutions Problem 1 — Reverse a String
function   reverseString(hallo){
let result = ""
for (let i = hallo.length -1; i>= 0; i--){
result = result + hallo[i]
}
    return result
}
console.log(reverseString("hallo"))


//* solutions Problem 2 — FizzBuzz
 function fizzBuzz(n) {
   for (let i = 1; i <= n; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if(i % 3=== 0 ){
    console.log("Fizz");
  } else if(i % 5=== 0 ){
    console.log("Buzz");
   }else {
    console.log(i)
   }  }
 } 
fizzBuzz(15)


//* solutions Problem 3 — Find the Largest Number in an Array
function findLargest (num) {
  let  max = num[0];

  for (let i = 1; i < num.length; i++ ){
  if(num [i] > max){
  max = num[i];
    }
  }
 return max;
}
console.log(findLargest([3, 7, 2, 9, 5])); 


//* solutions Problem 4 — Check for Palindrome
function isPalindrome (s){
  let palindrome  = s.split('').reverse().join('');
  if  (s === palindrome){
  return true
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hallo"));