"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    const colors = [];
    document.querySelectorAll("input").forEach((checkbox) => {
      if (checkbox.checked === true) {
        colors.push(checkbox.value);
      }
    });
    alert(colors.join());
  });
}
