
function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;

    // Click the task to mark it as completed
    taskText.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Delete the task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    input.value = "";
    input.focus();
}

// Add a task when Enter is pressed
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
