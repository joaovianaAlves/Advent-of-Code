var fs = require("fs");

var data = fs.readFileSync("data.data").toString();

var sum = 0;
var arr = data.split("\n").map(Number);
var array = [];

arr.forEach((element) => {
  sum += element;
  if (element == 0) {
    array.unshift(sum);

    sum = 0;
  }
});

array.sort((a, b) => b - a);

console.log(array);
