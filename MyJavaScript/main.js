"use strict";

const color = prompt("Color?");

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Slow down!");
    break;
  case "blue":
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Wrong color");
}
