"use strict";

const rate = 1.1;

for (let price = 150; price <= 160; price++) {
  console.log(`Price: ${price}`);
  for (let amount = 120; amount <= 140; amount += 10) {
    console.log(price * amount * rate);
  }
}
