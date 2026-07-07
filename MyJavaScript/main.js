"use strict";

let amount = 100;
for (let year = 1; year <= 30; year++) {
  amount *= 1.05;
  if (amount < 200) {
    continue;
  }
  if (amount > 300) {
    break;
  }
  console.log(`${year}:${amount}`);
}
