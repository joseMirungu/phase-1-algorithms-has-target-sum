function hasTargetSum(array, target) {
 
  const seenNumbers = new Set();

  for (const number of array) {
   
    const complement = target - number;

  
    if (seenNumbers.has(complement)) {
      return true;
    }

  
    seenNumbers.add(number);
  }

  
  return false;
}

/* 
  Big O time complexity:
  The time complexity of this function is O(n), where n is the number of elements in the array.
  This is because we iterate through the array once and perform O(1) operations (like checking for the presence of a number in a set and adding a number to a set) during each iteration.

  The space complexity of this function is also O(n) because we store up to n elements in the set.
*/

/* 
  Pseudocode:
  1. Define a function `hasTargetSum` that takes an array and a target as arguments.
  2. Create an empty set to keep track of the numbers we have seen so far.
  3. Iterate through each number in the array.
  4. For each number, calculate the complement (i.e., `target - number`).
  5. If the complement exists in the set, return `true`.
  6. If the complement does not exist in the set, add the current number to the set.
  7. If the loop completes without finding a pair, return `false`.
*/

/*
  Explanation:
  The function `hasTargetSum` checks if there are two numbers in the array that add up to the target.
  It uses a set to keep track of the numbers seen so far. For each number in the array, it calculates
  the complement (i.e., the number that would add with the current number to equal the target). 
  If the complement is found in the set, it means there is a pair that adds up to the target, and the
  function returns `true`. Otherwise, it adds the current number to the set and continues checking.
  If no such pair is found after iterating through the entire array, the function returns `false`.
*/


if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
