// return a new fully flattend array
// for each element e in the array
  // if e is not an array, leave it
  // if it is an array, flatten it

var flatten = function(arr) {

};

var arr = [0, 1, [2, 3, [4, [5, 6]]], [7]];
flatten(arr); // => [0, 1, 2, 3, 4, 5, 6, 7]



// now define on Array.prototype
Array.prototype.flatten = function () {

}

arr.flatten(); // => [0, 1, 2, 3, 4, 5, 6, 7]
