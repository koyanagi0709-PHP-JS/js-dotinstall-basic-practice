"use strict";

{
  const scores = { math: 80, english: 90 };

  scores.physics = 70;
  delete scores.english;
  console.log(scores);
}
