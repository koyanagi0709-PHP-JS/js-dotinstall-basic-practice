"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    // console.log(document.querySelector("p").classList.contains("pink-bg"));

    // if (document.querySelector("p").classList.contains("pink-bg") === false) {
    //   document.querySelector("p").classList.add("pink-bg");
    // } else {
    //   document.querySelector("p").classList.remove("pink-bg");
    // }
    document.querySelector("p").classList.toggle("pink-bg");
  });
}
