// const heading = document.getElementById("heading");
// const inputField = document.getElementById("inputField");
// const addBtn = document.getElementById("addBtn");


// addBtn.addEventListener("click", () => {
//     if(inputField.value.trim !== ""){
//         let newLi = document.createElement("li");

//         newLi.textContent = inputField.value;
        

//         document.getElementById("unOrderList").appendChild(newLi);
//         inputField.value = ""
//     }

// })


// // Selecting elements
// const inputField = document.getElementById("inputField");
// const addBtn = document.getElementById("addBtn");
// const unOrderList = document.getElementById("unOrderList");
// const searchBar = document.getElementById("searchBar");
// const darkModeToggle = document.getElementById("darkModeToggle");

// // Load tasks from localStorage
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// renderTasks();

// // Function to render tasks
// function renderTasks() {
//     unOrderList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         let newLi = document.createElement("li");
//         newLi.classList.add("task-item");

//         // Mark completed tasks
//         if (task.completed) {
//             newLi.classList.add("completed");
//         }

//         newLi.innerHTML = `
//             <span class="task-text">${task.text}</span>
//             <button class="complete-btn">✔</button>
//             <button class="delete-btn">❌</button>
//         `;

//         // Complete task event
//         newLi.querySelector(".complete-btn").addEventListener("click", () => {
//             tasks[index].completed = !tasks[index].completed;
//             saveTasks();
//         });

//         // Delete task event
//         newLi.querySelector(".delete-btn").addEventListener("click", () => {
//             tasks.splice(index, 1);
//             saveTasks();
//         });

//         unOrderList.appendChild(newLi);
//     });
// }

// // Save tasks to localStorage
// function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks();
// }

// // Add Task Event
// addBtn.addEventListener("click", () => {
//     if (inputField.value.trim() !== "") {
//         tasks.push({ text: inputField.value, completed: false });
//         inputField.value = "";
//         saveTasks();
//     }
// });

// // Search Filter
// searchBar.addEventListener("input", (e) => {
//     let searchText = e.target.value.toLowerCase();
//     document.querySelectorAll(".task-item").forEach(task => {
//         task.style.display = task.innerText.toLowerCase().includes(searchText) ? "flex" : "none";
//     });
// });

// // Dark Mode Toggle
// darkModeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
// });


// Selecting elements
const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const unOrderList = document.getElementById("unOrderList");
const searchBar = document.getElementById("searchBar");
const darkModeToggle = document.getElementById("darkModeToggle");
const dueDate = document.getElementById("dueDate");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Function to render tasks
function renderTasks() {
    unOrderList.innerHTML = "";
    
    // Sort tasks by due date
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    tasks.forEach((task, index) => {
        let newLi = document.createElement("li");
        newLi.classList.add("task-item");
        newLi.setAttribute("data-index", index);

        if (task.completed) newLi.classList.add("completed");

        newLi.innerHTML = `
            <span class="task-text">${task.text}</span>
            <span class="due-date">${task.dueDate ? `📅 ${task.dueDate}` : ""}</span>
            <button class="edit-btn">✏</button>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        `;

        // Edit task
        newLi.querySelector(".edit-btn").addEventListener("click", () => {
            let newText = prompt("Edit Task:", task.text);
            if (newText !== null) {
                tasks[index].text = newText;
                saveTasks();
            }
        });

        // Complete task
        newLi.querySelector(".complete-btn").addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        });

        // Delete task
        newLi.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
        });

        unOrderList.appendChild(newLi);
    });

    // Enable drag & drop
    new Sortable(unOrderList, {
        animation: 150,
        onEnd: function (evt) {
            const movedItem = tasks.splice(evt.oldIndex, 1)[0];
            tasks.splice(evt.newIndex, 0, movedItem);
            saveTasks();
        }
    });
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Add Task Event
addBtn.addEventListener("click", () => {
    if (inputField.value.trim() !== "") {
        tasks.push({ text: inputField.value, completed: false, dueDate: dueDate.value });
        inputField.value = "";
        dueDate.value = "";
        saveTasks();
    }
});

// Search Filter
searchBar.addEventListener("input", (e) => {
    let searchText = e.target.value.toLowerCase();
    document.querySelectorAll(".task-item").forEach(task => {
        task.style.display = task.innerText.toLowerCase().includes(searchText) ? "flex" : "none";
    });
});

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
});
