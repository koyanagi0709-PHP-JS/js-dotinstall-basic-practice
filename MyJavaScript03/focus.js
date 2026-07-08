"use strict";

{
  document.querySelector("input").addEventListener("focus", () => {
    document.querySelector("p").textContent = "English only!";
  });

  document.querySelector("input").addEventListener("blur", () => {
    document.querySelector("p").textContent = "";
  });

  document.querySelector("input").focus();
}
