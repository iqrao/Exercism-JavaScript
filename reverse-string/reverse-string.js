//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  let inputSplit = input.split();
  let inputReverse = inputSplit.reverse();
  let inputJoin = inputReverse.join();
  return inputJoin;
};
