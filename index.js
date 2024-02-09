function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let number = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === number) {
        return true;
      }
    }
  }
  return false;
}

/* 
  The time complexity for this function is O(n^2) because the function iterated over the array twice, Once to go through the entire array and see all the elements in it when we used the for loop and subtract the number so we can find the value of the first number, Then we itarate over the array again to we can find the second element in our array.
*/

/* 
  possible solution take the target number and subtract num from it to find out the second number. The approach can be done by using a for loop to itarate through the array and get the index of all the elements in the array. Then we can set a variable to store the number so we have our first number. Then we can itarete through the array again using another foor loop to get the value of the second number. Then we can check is that number exists in the array the second time around and return the boolean depending on the findings.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
