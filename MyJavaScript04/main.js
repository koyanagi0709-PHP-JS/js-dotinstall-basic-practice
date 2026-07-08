"use strict";

{
  // 2000 4 11
  const d = new Date(2000, 3, 11);
  console.log(d);

  // Unix Timestamp
  console.log(d.getTime());

  const d2 = new Date(d.getTime() + 1000);
  console.log(d2);
}
