"use strict";

{
  const app = window.todoApp;

  app.elements.filterAll.addEventListener("click", () => {
    app.currentFilter = "all";
    app.renderTasks();
  });

  app.elements.filterActive.addEventListener("click", () => {
    app.currentFilter = "active";
    app.renderTasks();
  });

  app.elements.filterDone.addEventListener("click", () => {
    app.currentFilter = "done";
    app.renderTasks();
  });
}
