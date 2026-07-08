"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    // console.log("Clicked");
    // document.querySelector("p").textContent = "こんにちは";
    document.querySelector("p").textContent =
      document.querySelector("button").textContent;
  });

  console.log("Hello");
}
