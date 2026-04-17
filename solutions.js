//* solutions Problem 1 — Reverse a String

// function   reverseString(hallo){
// let result = ""
// for (let i = hallo.length -1; i>= 0; i--){
// result = result + hallo[i]
// }
//     return result
// }
// console.log(reverseString("hallo"))

//*git commit -m "solve: problem 1 - reverse string"


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
   }
  }
 } 
fizzBuzz(15)


