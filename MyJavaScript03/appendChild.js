"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    const liElement = document.createElement("li");
    liElement.textContent = "Hanako";

    // document.querySelector("ul").appendChild(liElement);
    // document
    //   .querySelector("ul")
    //   .insertBefore(liElement, document.querySelector("#second"));
    if (confirm("Sure?") === true) {
      document.querySelector("#second").remove();
    }
  });
}
