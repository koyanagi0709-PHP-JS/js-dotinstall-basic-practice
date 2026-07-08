"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("p").classList.add("pink-bg", "red-border");
    document.querySelector("p").classList.remove("green-color");
  });
}
