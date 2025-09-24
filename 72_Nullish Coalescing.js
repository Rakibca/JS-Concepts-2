/*
Challenge:
    1. Swap the logical OR operator for a Nullish Coalescing operator.
*/

function fetchUserBalance() {
  const userBalance = 0;
  //return userBalance;
}

const balance = fetchUserBalance();
//const displayBalance = balance || 'currently not available';

// Using Nullish Coalescing operator, if left hand side is null or undefined, then return right hand side's truthy value
const displayBalance = balance && 'currently not available';

console.log(`Your balance is ${displayBalance}.`);
