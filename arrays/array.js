"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
// module.exports = {maxOfThree, sum, multiply,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams,generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
 function maxOfThree(a, b, c){ 
    
    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else
        return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}
