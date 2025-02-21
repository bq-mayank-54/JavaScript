//Select Elements
const taskInput = document.getElementById("taksInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const darkModeToggle = document.getElementById("darkModeToggle");

//Load tasks from localStorage
document.addEventListener("DOMContentLoader", loadTasks);

//Add Task
addTaskBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if(taskText !== "") {
        addTaskBtn(taskText);
        saveTasks();
        taskInput.value = "";
    }
});

//Mark Task as Completed or Delete task
taskList.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
        saveTasks();
    } else if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        saveTasks();
    }
});

// Search Filter
searchInput.addEventListener("input", () => {
    let filter = searchInput.value.toLowerCase();
    let tasks = document.querySelectorAll("li");
    tasks.forEach(task => {
        let text = task.firstChild.textContent.toLowerCase();
        task.style.display = text.includes(filter) ? "flex" : "none";
    });
});

//Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//Functions
function addTask(taskText) {
    let li = document.createElement("li");
    li.textContent = taskText;

    //Delete Button
    let deleteBtn = document.createAttribute("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

//Save Tasks to Local Storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("li").forEach(task => {
        tasks.push({
            text: task.firstChild.textContent,
            completed: task.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks from Local Storage
function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => {
        addTask(task.text);
        if(task.completed) {
            taskList.lastChild.classList.add("completed");
        }
    });
}

