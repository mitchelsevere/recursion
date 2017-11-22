// sum of all numbers in an array. sum of empty array is 0
var sum = function (arr) {

};

sum([10, 20, 50, 100]); // => 180
sum([-8, 0, 5]); // => -3
sum([]); // => 0

// now define this as an array method

Array.prototype.mySum = function () {

};

var arr = [10, 20, 50, 100];
arr.mySum(); // => 180
