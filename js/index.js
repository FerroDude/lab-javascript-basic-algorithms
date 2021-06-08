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


//bonus 1


const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin risus, at tempus massa sollicitudin laoreet. Donec ac consectetur est. Curabitur in imperdiet lacus. Pellentesque nec odio feugiat, consectetur risus sed, iaculis ligula. Nullam urna nisl, porttitor sed libero nec, tincidunt pharetra tellus. Pellentesque non diam imperdiet, elementum lacus vel, vestibulum odio. Etiam tincidunt enim libero, at fringilla lectus luctus eu. Cras posuere, felis ac pretium tempus, lectus tellus eleifend dolor, a condimentum orci ex sodales dolor. Sed vitae aliquam purus, sit amet tempus quam. Sed venenatis, diam in feugiat vestibulum, eros urna maximus mauris, ut semper mi orci quis erat. Quisque sed felis cursus, hendrerit odio ac, blandit turpis. Nunc feugiat et risus sed venenatis. Vivamus consectetur convallis nulla porttitor varius. Etiam lacus ligula, ornare tincidunt arcu eu, efficitur elementum mauris. Donec feugiat elit vel orci consequat, id feugiat augue pharetra. Integer eu magna at turpis laoreet condimentum a eget tellus. Pellentesque mi augue, imperdiet ut odio at, posuere aliquet ipsum. Donec ut gravida augue, in dapibus ante. Aliquam commodo ante mollis, pharetra neque nec, pellentesque odio. Nam luctus dictum nibh et hendrerit. Vestibulum mauris elit, tincidunt sed porttitor nec, mattis aliquam augue. Nam id sapien tellus. Proin porttitor purus ut felis congue, et sagittis mauris facilisis. Vestibulum vel volutpat ex, a egestas mauris. Donec non feugiat ex. Etiam laoreet accumsan dui, non consequat ipsum consectetur a. Sed cursus, ligula sed ornare molestie, augue odio hendrerit nibh, aliquet tempor metus orci nec enim. Aliquam malesuada non quam a dictum. Maecenas porta vulputate nibh, non auctor dolor iaculis quis. Phasellus a eleifend diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a est sodales felis blandit dignissim. Etiam quis scelerisque orci, eu feugiat turpis. Mauris neque urna, feugiat vitae leo non, porta gravida velit."

wordCount = 1 //starts at 1 to account for the lack of a space after the last word

for (let i = 0; i < randomText.length; i++) {
  if (randomText[i] === " ") {
    wordCount += 1;
  }
}

console.log(wordCount) //Outputs number of word in randomText


//the idea behind this function was: 1 - Find an "e"; 2 - check if the character before the "e" was and empty space or a dot so it wouldn't be in the middle of another word; 3 - check if the character after the "e" was a "t"; 4 - check if the character after the "t" was an empty space or a dot so it would be the start of another word
function etWordCount(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "e" && (str[i - 1] === " " || str[i - 1] === ".") && str[i + 1] === "t" && (str[i + 2] === " " || str[i + 2] === ".")) {
        counter += 1;
      }
    }
    console.log(counter);
   }
   
   etWordCount(randomText) //outputs number of times the word et appears in the given string


//Bonus 2 




