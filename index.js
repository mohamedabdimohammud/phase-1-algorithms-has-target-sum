function hasTargetSum(array, target) {
  const hashMap = {};

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const difference = target - current;

    if (hashMap[difference]) {
      return true;
    }

    hashMap[current] = true;
  }

  return false;
}

/*
  The time complexity of this function is O(n), where n is the length of the input array.
  This is because we loop through the array once, and each lookup and insertion into the hash map takes O(1) time.
*/

/*
  Pseudocode:

  function hasTargetSum(array, target):
    hashMap = {}

    for i from 0 to array.length - 1:
      current = array[i]
      difference = target - current

      if hashMap contains difference:
        return true

      add current to hashMap

    return false
*/

/*
  Explanation:

  We define a function called hasTargetSum that takes in two parameters: an array of integers called "array",
  and a target integer called "target".

  To solve this problem, we use a hash map to store the difference between target and the current element as keys.
  
  If we have looped through the entire array and haven't found two elements that sum up to the target value,
  we return false.
*/

// You can run `node index.js` to view these console logs
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
