//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor() {
    ;
  }

  get sumOfSquares() {
    let sumOfSquares = 0;
    for (let i = 1; i <= 10; i++) {
    sumOfSquares += (i * i)
    } 
    return sumOfSquares;
  }

  get squareOfSum() {
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
    sum += i;
    squareOfSum = sum * sum;
    }
    return squareOfSum;
  }

  get difference() {
    let difference = squareOfSum - sumOfSquares;
    return difference;
  }
}
