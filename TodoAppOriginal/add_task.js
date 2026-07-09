"use strict";

{
  const taskInput = document.querySelector("#task-input"); // タスク内容
  const taskSelect = document.querySelector("#task-select"); // タスク優先度
  const taskButton = document.querySelector("#task-button"); // タスク追加ボタン
  const taskBody = document.querySelector("#task-body"); // タスク一覧 本体

  /* 現在日付を返す */
  function formatTime() {
    const timestamp = Date.now(); // 数値（ミリ秒）を取得
    const now = new Date(timestamp); // 日付オブジェクトに変更
    const y = now.getFullYear(); // 年
    const m = now.getMonth(); // 月 0～11
    const d = now.getDate(); // 日
    const hh = now.getHours(); //時間
    const mm = now.getMinutes(); //分
    const ss = now.getSeconds(); //秒
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }

  /* Todo task DOM構築 */
  function createTaskElement(taskText, priority, dateTime) {
    const article = document.createElement("article");
    article.classList.add("container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task";
    checkbox.className = "task-check";
    checkbox.setAttribute("aria-label", "タスク完了チェック");

    const taskBody = document.createElement("div");
    taskBody.className = "task-body";

    const taskBodyMain = document.createElement("p");
    taskBodyMain.className = "task-body-main";
    taskBodyMain.textContent = taskText;

    const taskBodySub = document.createElement("p");
    taskBodySub.className = "task-body-sub container";
    taskBodySub.textContent = `優先度：${priority}　`;

    taskBodySub.innerHTML += `<svg
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                    />
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                    /></svg
                  >&nbsp;`;
    const timeNode = document.createElement("time");
    timeNode.textContent = dateTime;
    taskBodySub.appendChild(timeNode);

    taskBody.appendChild(taskBodyMain);
    taskBody.appendChild(taskBodySub);

    const button = document.createElement("button");
    button.className = "task-button";
    button.setAttribute("aria-label", "タスク削除ボタン");
    button.innerHTML = `<svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>`;
    article.appendChild(checkbox);
    article.appendChild(taskBody);
    article.appendChild(button);

    return article;
  }

  /* Todo task 追加 */
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const priority = taskSelect.value;
    const dateTime = formatTime();

    const task = createTaskElement(taskText, priority, dateTime);
    taskBody.appendChild(task);

    taskInput.value = "";
    taskInput.focus();
  }

  taskButton.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
}
