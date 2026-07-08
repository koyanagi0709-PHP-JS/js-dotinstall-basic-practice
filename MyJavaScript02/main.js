"use strict";

{
  const scores = { math: 80, english: 90 };

  const entries = Object.entries(scores);
  // console.log(entries);
  entries.forEach((prop) => {
    // console.log(prop);
    console.log(`${prop[0]}: ${prop[1]}`);
  });
}
