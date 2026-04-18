
//  Problem 1  - Reverse String
//  Problem 2  - FizzBuzz
//  Problem 3  - Find Largest
//  Problem 4  - Palindrome
//  Problem 5  - Sum of Array
//  Problem 6  - Count Vowels
//  Problem 8  - Even or Odd List
//  Problem 10 - Find Minimum
//  Problem 11 - Multiplication Table
//  Problem 14 - Celsius to Fahrenheit



//* solutions Problem 1 — Reverse a String
function   reverseString(hallo){
let result = ""
for (let i = hallo.length -1; i >= 0; i--){
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
  function isPalindrome(s) {
    let reversed = ""
    for (let i = s.length - 1; i >= 0; i--) {
        reversed = reversed + s[i]
    }
    if (s === reversed) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hallo"));


//* solutions Problem 5 — Sum of Array Elements
 function sumArray (nums){
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i]
  }
  return sum;

 }
console.log(sumArray([1, 2, 3, 4])); 

//* solutions Problem video code explain >= 6,8,10,11,14; 

//* solutions Problem 6 — Count Vowels done 
 function countVowels(s) {
   let count = 0;

    for (let i = 0; i < s.length; i++ ) {
        if ( "aeiou". includes(s[i]. toLowerCase())){
            count++
        }
    }
    return count;
 }
console.log(countVowels("hallo "))


//* solutions Problem 8 — Even or Odd List done
  function evenOrOddList(nums) {
    let result = [];

    for (let i =  0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
        result.push( nums[i])
        }
    }
return result;

  }

console.log(evenOrOddList([1,2,3,4,5,6,]))



//* solutions Problem 10 — Find the Minimum in an Array done
 function fidMin(nums){
    let min =  nums[0];

    for (let i = 1; i < nums.length; i++) {
 if (nums[i] < min) {
    min = nums[i];
 }
    }
    return min;
 }
console.log(fidMin([3,7,1,9]))


//* solutions Problem 11 — Multiplication Table done 
  function multiplication(n){
    let result = [];

    for (let i = 1; i <= 10; i++) {
        result.push(`${n} * ${i} = ${n * i }`);
    }
    return result;
  }
  console.log(multiplication(5))



//* solutions Problem 14 —  Convert Celsius to Fahrenheit done 
function fahrenheit(celsius){
 let fahrenheit =  (celsius * 9/5)+ 32;
 return fahrenheit;
}
console.log(fahrenheit(25))
