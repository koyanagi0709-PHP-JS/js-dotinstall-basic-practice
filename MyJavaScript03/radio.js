"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll("input").forEach((radio) => {
      if (radio.checked === true) {
        alert(radio.value);
      }
    });
  });
}
