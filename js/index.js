// Iteration 1: Names and Input

const hacker1 = "Manuel"; //Driver's name
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Maria"; //Navigator's name
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

//Capitalized and space between characters for driver
capitalizedSpacedDriverName = ""; //this is a horrible name for the variable

for (let i = 0; i < driverNameLength; i++) {
  capitalizedSpacedDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedSpacedDriverName);

//Navigator's name in reverse order
reverseName = "";

lastIndex = hacker2.length - 1;

for (let i = lastIndex; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The drivers name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}
