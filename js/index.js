// Iteration 1: Names and Input

//Driver's name
const hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}.`);

//Navigator's name
const hacker2 = "Maria";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
  console.log(
    `The driver has the longest name, it has ${driverNameLength} characters.`
  );
} else if (navigatorNameLength > driverNameLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverNameLength} characters!`
  );
}

// Iteration 3: Loops
