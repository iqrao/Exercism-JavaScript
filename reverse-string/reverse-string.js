//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  // longer way of solving this: 
  // using each method and putting it in a variable
  // repeating but its in efficient
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Inefficient ex below: 
  // let inputSplit = input.split("");
  // let inputReverse = inputSplit.reverse();
  // let inputJoin = inputReverse.join("");
  // return inputJoin;
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // combine methods in js w/ . for one line. 
  return input.split("").reverse().join("");
};
