//* Core Language  Execution

//* 1 Explain hoisting for var, let, const, and function declarations.
//* 2 What is the temporal dead zone (TDZ) and why does it exist?
//* 3 How does the JavaScript execution context work?
//* 4 Difference between call stack, task queue, and microtask queue.
//* 5 How does the event loop prioritize Promises over setTimeout?
//* 6 Explain lexical scoping with an example.
//* 7 What happens when you access an undeclared variable vs undefined?


//* 1 Explain hoisting for var, let, const, and function declarations.
// জাভাস্ক্রিপ্টে হোইস্টিং হলো এমন একটি আচরণ,
// যেখানে ভ্যার, লেট, কনস্ট, এবং ফাংশন ডিক্লারেশনগুলো স্ক্রিপ্টের শুরুতে "উঠে" যায়।
// ভ্যার ডিক্লারেশন পুরোপুরি হোইস্ট হয়,
// তবে তা undefined দিয়ে ইনিশিয়াল হয়। লেট আর কনস্ট হোইস্ট হয়,
// কিন্তু টেম্পোরাল ডেড জোনে থাকে,
// মানে এগুলো ডিক্লেয়ার করার আগে রেফারেন্স করলে এরর আসে। ফাংশন ডিক্লারেশনও পুরোপুরি হোইস্ট হয়, 
// ফলে এগুলোকে স্ক্রিপ্টের যেকোনো জায়গা থেকে আগে কল করা যায়।

// 1. var Hoisting (undefined দেখাবে)
// console.log("var value:", myVar); // Output: undefined
// var myVar = "Full-Stack Developer";

// 2. let & const Hoisting (Error দিবে - TDZ)
// try {
//     console.log(myLet); 
// } catch (e) {
//     console.log("let error:", e.message); // Output: Cannot access 'myLet' before initialization
// }
// let myLet = "Next.js & Golang";

// 3. Function Declaration (সরাসরি কাজ করবে)
// sayHi(); // Output: Hello from Mymensingh! 

// function sayHi() {
//     console.log("Hello from Mymensingh!");
// }

// 4. Function Expression (ভেরিয়েবলের মতো আচরণ করবে)
// try {
//     greet(); 
// } catch (e) {
//     console.log("Expression error:", e.message); // Output: greet is not a function
// }

// var greet = function() {
//     console.log("Welcome to NexaCode Studio! ");
// };
//  সহজ উদাহরণ দিয়ে সারকথা:
// var: যেমন ধরুন, আপনি জানেন আপনার একটি পার্সেল আসলে, 
// কিন্তু ভেতরে কী আছে তা এখনো জানেন না (undefined)। 

// let/const: পার্সেল আসার আগে আপনি সেটি ধরার চেষ্টা করছেন, কিন্তু পুলিশ (JS Engine)
// আপনাকে বাধা দিচ্ছে কারণ ওটা এখনো আসেনি (TDZ)। 

// function: এটি একটি জাদুকরী বাঁশির মতো—বাঁশিটি পকেটে থাকলেই আপনি সেটি বাজাতে পারেন, 
// কোডে আগে বা পরে যেখানেই থাকুক। 


//* 2 What is the temporal dead zone (TDZ) and why does it exist?
// TDZ হলো সেই সময়কাল,
// যখন লেট বা কনস্ট ভ্যারিয়েবল ডিক্লেয়ার করা হয়,
// কিন্তু ইনিশিয়ালাইজ করা হয় না। এই সময়,
// আপনি সেই ভ্যারিয়েবলের রেফারেন্স করতে চাইলে জাভাস্ক্রিপ্ট একটি এরর দেয়। এটা নিরাপত্তার জন্য রাখা হয়েছে,
// যাতে আপনি ভুল করে ডিক্লেয়ার হওয়ার আগেই ভ্যারিয়েবল ব্যবহার না করেন।

// ধরো, আমরা একটি লেট ভ্যারিয়েবল ডিক্লেয়ার করেছি, কিন্তু সেটাকে ব্যবহার করার আগে চেষ্টা করছি। উদাহরণ স্বরূপ,
//  যদি আমরা লিখি:

//* console.log(x);
//* let x = 10;

// এখানে, লেট x ডিক্লেয়ার করার আগেই console.log(x) কল করা হয়েছে,
//  ফলে জাভাস্ক্রিপ্ট এখানে একটি এরর দেবে, কারণ x এখনও TDZ-তে আছে।

// TDZ বলতে আসলে বোঝানো হচ্ছে সেই সময়কাল, যখন ভ্যারিয়েবলটি স্কোপে আছে,
// কিন্তু পুরোপুরি ইনিশিয়ালাইজ হয়নি। এই অবস্থায়, সেটিকে ব্যবহার করার চেষ্টা করলে জাভাস্ক্রিপ্ট তা ধরতে পারে না,
// এবং একটি রেফারেন্স এরর দেয়। তাই, এখানে "TDZ-তে আছে" মানে হলো, 
// সেই মুহূর্তে ভ্যারিয়েবলটি ব্যবহার করার জন্য প্রস্তুত নয়, কারণ সেটি এখনও ঘোষিত হয়েছে, কিন্তু মান দেওয়া হয়নি।