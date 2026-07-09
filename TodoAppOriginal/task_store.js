"use strict";

{
  const STORAGE_KEY = "todoApp.tasks";

  const elements = {
    taskInput: document.querySelector("#task-input"),
    taskSelect: document.querySelector("#task-select"),
    taskButton: document.querySelector("#task-button"),
    taskBody: document.querySelector("#task-body"),
    filterAll: document.querySelector("#filter-all"),
    filterActive: document.querySelector("#filter-active"),
    filterDone: document.querySelector("#filter-done"),
    statusAll: document.querySelector("#status-all"),
    statusActive: document.querySelector("#status-active"),
    statusDone: document.querySelector("#status-done"),
    deleteDoneButton: document.querySelector("#task-header > button"),
  };

  const app = window.todoApp || {};
  app.tasks = [];
  app.currentFilter = "all";
  app.elements = elements;

  /* 現在日付を返す */
  app.formatTime = (timestamp) => {
    const now = new Date(timestamp);
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  };

  /* Todo task DOM構築 */
  app.createTaskElement = (task) => {
    const article = document.createElement("article");
    article.classList.add("container", "fade-in");
    article.dataset.id = task.id;
    if (task.completed) article.classList.add("complete");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task";
    checkbox.className = "task-check";
    checkbox.setAttribute("aria-label", "タスク完了チェック");
    if (task.completed) checkbox.checked = true;

    const taskBody = document.createElement("div");
    taskBody.className = "task-body";

    const taskBodyMain = document.createElement("p");
    taskBodyMain.className = "task-body-main";
    taskBodyMain.textContent = task.text;

    const taskBodySub = document.createElement("p");
    taskBodySub.className = "task-body-sub container";
    taskBodySub.textContent = `優先度：${task.priority}　`;
    taskBodySub.innerHTML += `<svg width="12" height="12" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
          </svg>`;
    const timeNode = document.createElement("time");
    timeNode.textContent = app.formatTime(task.createdAt);
    taskBodySub.appendChild(timeNode);

    const button = document.createElement("button");
    button.className = "task-button";
    button.setAttribute("aria-label", "タスク削除ボタン");
    button.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>`;

    taskBody.appendChild(taskBodyMain);
    taskBody.appendChild(taskBodySub);
    article.appendChild(checkbox);
    article.appendChild(taskBody);
    article.appendChild(button);

    return article;
  };

  app.saveTasks = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(app.tasks));
  };

  app.loadTasks = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    app.tasks = raw ? JSON.parse(raw) : [];
  };

  app.getFilteredTasks = () => {
    return app.tasks.filter((task) => {
      if (app.currentFilter === "active") return !task.completed;
      if (app.currentFilter === "done") return task.completed;
      return true;
    });
  };

  app.updateStatusTags = () => {
    const all = app.tasks.length;
    const done = app.tasks.filter((task) => task.completed).length;
    const active = all - done;
    elements.statusAll.textContent = all;
    elements.statusActive.textContent = active;
    elements.statusDone.textContent = done;
  };

  app.updateFilterButtonState = () => {
    elements.filterAll.classList.toggle("is-active", app.currentFilter === "all");
    elements.filterActive.classList.toggle("is-active", app.currentFilter === "active");
    elements.filterDone.classList.toggle("is-active", app.currentFilter === "done");
  };

  app.renderTasks = () => {
    elements.taskBody.innerHTML = "";
    app.getFilteredTasks().forEach((task) => {
      elements.taskBody.appendChild(app.createTaskElement(task));
    });
    app.updateStatusTags();
    app.updateFilterButtonState();
  };

  app.init = () => {
    app.loadTasks();
    app.renderTasks();
  };

  window.todoApp = app;
  app.init();
}
