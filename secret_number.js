'use strict';
module.exports = function() {
    let answer = []; // the empty box
    return function secretNumber(){
        if(answer.length === 0){ // only if the box is empty
            // only then, we'll assign ONE random number to it
            return answer = Math.floor(Math.random() * 1000001);
        }
    return answer; // need to give the answer
    }
};