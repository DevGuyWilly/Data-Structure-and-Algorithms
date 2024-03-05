// STACKS
// FUNCTIONS AVAILABLE : PUSH, POP, PEEK, LENGTH/SIZE
// ARRAYS HAVE FUNCTIONS OF A STACK

let letters = [];

let word = "racecar";
let rword = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

//
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //   Adds Value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //   Removes and return the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
};
