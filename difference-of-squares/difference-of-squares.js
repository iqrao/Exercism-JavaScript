//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(max) {
    let squares1 = 1;
    const squares5 = 5;
    const squares100 = 100;
    squares1 = max;


  }

  get sumOfSquares() {
    let sumOfSquares = 0;
    for (let i = 1; i <= max; i++) {
    sumOfSquares += (i * i)
    } 
    return sumOfSquares;
  }

  get squareOfSum() {
    let sum = 0;
    for(let i = 1; i <= max; i++) {
    sum += i;
    squareOfSum = sum * sum;
    }
    return squareOfSum;
  }

  get difference() {
    let difference = this.squareOfSum - this.sumOfSquares;
    return difference;
  }
}
