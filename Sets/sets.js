const { log } = require("console");

// Like an array, no duplicate items and in any particular order
let Set = function () {
  // this would hold the items
  let Collections = [];

  //   thismethods will check for the presence of an element and return true of flase
  this.has = function (element) {
    return Collections.indexOf(element) !== -1;
  };

  //   this method will return alll the values in the set
  this.value = function () {
    return Collections;
  };

  //   this method will add an element to the set
  this.add = function (element) {
    if (!this.has) {
      Collections.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from a set
  this.remove = function(element){
    if (this.has(element)) {
        index = Collections.indexOf(element);
        Collections.splice();
    }
  }
};
