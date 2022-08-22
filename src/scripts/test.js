const addtaskbtn = document.getElementById("btn-addtask");
const input = document.getElementById("userInput");
const counter = document.getElementById("counter");

function taskCounter(){
    const itemCount = document.querySelectorAll('li').length;
    const checkedCount = document.querySelectorAll('.is-done').length;
    const uncheckedCount = itemCount - checkedCount;     
    counter.innerHTML = uncheckedCount;
    // console.log("All tasks: " + itemCount);
    // console.log("Done tasks: " + checkedCount);
    // console.log("Remaining tasks: " + uncheckedCount);
}

let allTasks = [];
let id = 0;
function addData() {
    if (input.value != "") {
        let task = {
            Id: ++id,
            Task: input.value
        }
        allTasks.push(task);
        console.log('\n' + JSON.stringify(allTasks, '\t', 2));
        // console.log(allTasks);
    }
}

//1st click on button to expand the input and add task.    
function expandInput() {
    input.classList.toggle('expandinput');
    if (input.classList.contains('expandinput')) {
        input.focus();
    }
}
// addtaskbtn.addEventListener("click", expandInput);



//2nd create elements
function createListElement() {
    if (input.value.length > 0) {
        addData();
    }
    const ul = document.querySelector("ul"); //create unordered list
    ul.classList.add("all-list-items");

    const li = document.createElement("li"); //create list item
    li.classList.add("list-item");

    const bullet = document.createElement("span");  //create bullet
    bullet.classList.add('bullet');
    bullet.classList.add('bullet-bggrey'); // completed task css class


    const taskDetails = document.createElement("div");   //create div for task
    taskDetails.classList.add("tasks");
    taskDetails.classList.add("done-task"); // completed task css class

    const checkdot = document.createElement("span");    //create checkdot
    checkdot.classList.add('checkdot');
    checkdot.classList.add('checkdot-border'); // completed task css class

    const todoDate = document.createElement("p");    //create day-date-month para
    todoDate.classList.add("todo-date");

    const task = document.createElement("p");     //create task para
    task.classList.add("task");

    const checkmark = document.createElement("i"); //create checkmark
    checkmark.classList.add("fa-solid");
    checkmark.classList.add("fa-check");
    checkmark.classList.add("checkmark"); // completed task css class



    //structuring
    ul.appendChild(li);

    li.appendChild(bullet);
    li.appendChild(taskDetails);
    li.appendChild(checkdot);

    taskDetails.appendChild(todoDate);
    taskDetails.appendChild(task);
    task.appendChild(document.createTextNode(input.value));

    checkdot.appendChild(checkmark);


    // get day date month
    const alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();


    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth();

    // console.log(days[day],",",date,months[month]);
    todoDate.appendChild(document.createTextNode(alldays[day] + ","));
    todoDate.appendChild(document.createTextNode(date + "  "));
    todoDate.appendChild(document.createTextNode(allmonths[month]));

    input.value = ""; //Reset text input field
    input.blur();
    taskCounter();

    const allcheckdots = document.querySelectorAll('.checkdot');
    allcheckdots.forEach((dot) => {
        dot.onclick = (e) => {
            e.target.closest("li").classList.toggle("is-done");
            taskCounter();
        }
    })
}


//makes sure that an empty input field doesn't create a li
function addListAfterClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

// addtaskbtn.addEventListener("click", addListAfterClick);


function addListOnEnter(e) {
    if (input.value.length > 0 && e.key === "Enter") {
        createListElement();
        input.classList.toggle('expandinput');
    }
}
// input.addEventListener("keypress", addListOnEnter);

function init(){
    addtaskbtn.addEventListener("click", expandInput);
    addtaskbtn.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListOnEnter);
}
init();