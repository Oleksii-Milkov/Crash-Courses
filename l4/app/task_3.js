const meetings = [];

let count = "X";

while (meetings.length != getRandom(1, 5)) {
  for (let i = 0; i <= getRandom(1, 6); i++) {
    count += "X";
  }
  meetings.push(count);
}

console.log(meetings)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}