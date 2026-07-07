"use strict";

{
  const double = (num) => {
    return num * 2;
  };

  const calc = (num, func) => {
    return func(num);
  };

  console.log(calc(20, double));
}
