"use strict";

{
  let start = "Tokyo";
  let goal = "Osaka";

  // start = goal;
  // goal = start;

  // let temp = "";
  // temp = start;
  // start = goal;
  // goal = temp;

  [goal, start] = [start, goal];

  console.log(start, goal);
}
