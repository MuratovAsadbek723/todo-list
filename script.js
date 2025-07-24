function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "O‘chirish";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
