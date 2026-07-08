"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    alert(document.querySelector("textarea").value);
    document.querySelector("textarea").value = "";
  });
}
