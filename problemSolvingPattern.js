// Frequency Counter
//This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Problem : 1 Same
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Naive Solution O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// Refactored Solution O(n)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Problem : 2 ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

//------------------------------------------------
// Multiple Pointer
// Works only with sorted arrays
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// Problem : 1
//sumZero : Given a sorted array find if two numbers add up to zero and return array with both numbers found
// const sumZero = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let sum;
//   while (left < right) {
//     sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     }
//     if (sum > 0) {
//       right--;
//     }
//     if (sum < 0) {
//       left++;
//     }
//   }
// };

// console.log(sumZero([-5, -2, 0, 1, 2, 3, 4]));

// Problem : 2
// countUniqueValues : count number of unique values from given sorted array
// const countUniqueValues = (arr) => {
//   let p1 = 0;
//   let p2 = 1;
//   let counter = 1;
//   if (arr === []) {
//     return 0;
//   }
//   while (p2 !== arr.length) {
//     if (arr[p1] !== arr[p2]) {
//       counter++;
//     }
//     p1++;
//     p2++;
//   }
//   return counter;
// };

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4]));

//------------------------------------------
// Sliding Window
//This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Problem : 1 maxSubarraySum
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Naive Solution O(n^2)
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// Better Solution using sliding window approach O(n)
// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

//---------------------------------------------------------
// Divide and Conquer
//This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity

// Problem : 1 Binary Search

// var longestAlternatingSubarray = function (nums, threshold) {
//   let count = 0;
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= threshold) {
//       if (nums[i] % 2 === 0) {
//         result.push(true);
//       } else {
//         result.push(false);
//       }
//     } else {
//       result.push(false);
//     }
//   }
//   console.log(result);
// };

var longestAlternatingSubarray = function (nums, threshold) {
  let solution = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] * nums[i + 1]) % 2 === 0 &&
      nums[i] <= threshold &&
      nums[i + 1] <= threshold
    ) {
      solution[i - 1] !== 0
        ? (solution[i] = solution[i - 1] + 1)
        : (solution[i] = 1);
    } else {
      solution[i] = 0;
    }
  }
  console.log(solution);
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
