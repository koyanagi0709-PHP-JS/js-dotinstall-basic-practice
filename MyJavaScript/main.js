"use strict";

{
  function calculateTotal(price, amount, rate = 1.1) {
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 10));
  console.log(calculateTotal(150, 10));
  console.log(calculateTotal(200, 10));
  console.log(calculateTotal(120, 10, 1.08));
}
