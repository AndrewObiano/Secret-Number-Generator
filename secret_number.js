"use strict";
module.exports = function() {
  let answer = null; // the empty box
  return function secretNumber() {
    if (answer === null) {
      // only if the answer is empty
      // only then, we'll assign ONE random number to it
      return (answer = Math.floor(Math.random() * 1000001));
    }
    return answer; // need to give the answer
  };
};
