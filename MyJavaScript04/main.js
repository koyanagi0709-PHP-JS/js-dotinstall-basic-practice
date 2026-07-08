"use strict";

{
  // 2000 4 11
  // const d = new Date(2000, 3, 11);
  // 2002 2 ??
  const d = new Date(2000, 3, 11);
  // d.setDate(23);
  d.setDate(d.getDate() + 100);

  console.log(d.toLocaleString());
}
