var fs = require("fs");

var data = fs.readFileSync("data.data").toString();

var max = 0;
var sum = 0;
var arr = data.split("\n").map(Number);
var array = [];

arr.forEach((element) => {
  sum += element;
  if (element == 0) {
    if (sum > max) {
      max = sum;
      array.unshift(max);
      if (array.length > 3) {
        array.pop();
      }
    }
    sum = 0;
  }
});

console.log(
  array.reduce((a, b) => {
    console.log(a, b);
    return a + b;
  }, 0)
);
