/*
Problem 6 - Project Euler

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

const tenNatural = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr100 = createArr(1, 100);

function createArr(start, end) {
    var arr = [];
    for(;start <= end; start++) {
        arr.push(start);
    }
    return arr;
}

function sumOfSquare(natArr) {
    var sum = 0;
    for (value of natArr) {
        sum += Math.pow(value, 2);
    }
    return sum;
}


function squareOfSum(natArr) {
    var sum = 0;
    for (value of natArr) {
        sum += value;
    }

    var square = Math.pow(sum, 2);
    return square;
}

function difference(bigger, smaller) {
    return bigger - smaller;
}


console.log(difference(squareOfSum(arr100), sumOfSquare(arr100)));

// Answer will be 25164150