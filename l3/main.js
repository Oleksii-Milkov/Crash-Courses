//Task 1
const SIZE = 5
let arr = [];

for (let i = 0; i < SIZE; i++) {
  arr.push([]);
  for (let j = 0; j < SIZE; j++) {
    arr[i][j] = Math.floor(Math.random() * (20 - 1) + 1);
  }
}

console.log(arr);
console.log(getMinValue(arr));

function getMinValue(arr) {
  let min = arr;
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (min[i][j] > arr[i][j]) {
        min[i][0] = arr[i][j]; //NOT WORKING
      };
    }
  }
}

//Task 2
/* const ages = [18, 5, 36, 54, 12];
ages.sort((a, b) => a - b);
console.log(ages[ages.length - 2], ages[ages.length - 1]); */

//Task 3
/* const str1 = "Lorem ipsum dolor sit amet";
const str2 = "Consectetur adipisicing elit delectus tempore";
const str3 = "At dolorum necessitatibus accusamus nobis";

console.log(shortestWord(str2));

function shortestWord(str) {
  return (str.split(' ').reduce((firstWord, secondWord) => firstWord.length <= secondWord.length ? firstWord : secondWord)).length;
} */