const addtaskbtn = document.getElementById("btn-addtask");
const input = document.getElementById("userInput");
const counter = document.getElementById("counter");

function taskCounter(){
    const itemCount = document.querySelectorAll('.fa-check').length;
    const checkedCount = document.querySelectorAll('.checkmark').length;
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
            Task: input.value,
        }
        allTasks.push(task);
        console.log('\n' + JSON.stringify(allTasks, '\t', 2));
    }
}

//1st click on button to expand the input and add task.    
function expandInput() {
    input.classList.toggle('expandinput');
    if (input.classList.contains('expandinput')) {
        input.focus();
    }
}
addtaskbtn.addEventListener("click", expandInput);



//2nd create elements
function createListElement() {
    if (input.value.length > 0) {
        addData();
    }
    const ul = document.querySelector("ul"); //create unordered list
    const li = document.createElement("li"); //create list item

    const bullet = document.createElement("span");  //create bullet
    bullet.classList.add('bullet');
    // bullet.classList.add('bullet-bggrey');


    const taskDetails = document.createElement("div");   //create div for task
    taskDetails.classList.add("tasks");
    // taskDetails.classList.add("done-task");

    const checkdot = document.createElement("span");    //create checkdot
    checkdot.classList.add('checkdot');
    // checkdot.classList.add('checkdot-border');

    const daydatemonth = document.createElement("p");    //create daydatemonth para
    daydatemonth.classList.add("daydatemonth");

    const task = document.createElement("p");     //create task para
    task.classList.add("task");

    const checkmark = document.createElement("i"); //create checkmark
    checkmark.classList.add("fa-solid");
    checkmark.classList.add("fa-check");
    // checkmark.classList.add("checkmark");



    //structuring
    ul.appendChild(li);

    li.appendChild(bullet);
    li.appendChild(taskDetails);
    li.appendChild(checkdot);

    taskDetails.appendChild(daydatemonth);
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
    daydatemonth.appendChild(document.createTextNode(alldays[day] + ","));
    daydatemonth.appendChild(document.createTextNode(date + "  "));
    daydatemonth.appendChild(document.createTextNode(allmonths[month]));

    input.value = ""; //Reset text input field
    input.blur();
    taskCounter();

    const allcheckdots = document.querySelectorAll('.checkdot');
    allcheckdots.forEach((dot) => {
        dot.onclick = (e) => {
            e.target.classList.toggle("checkmark");
            e.target.parentNode.classList.toggle("checkdot-border");
            e.target.parentNode.previousSibling.classList.toggle("done-task");
            e.target.parentNode.previousSibling.previousSibling.classList.toggle("bullet-bggrey");
            taskCounter();

            // e.target.closest("li").classList.toggle("is-done");
        }
    })
}


//makes sure that an empty input field doesn't create a li
function addListAfterClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

addtaskbtn.addEventListener("click", addListAfterClick);


function addListOnEnter(e) {

    if (input.value.length > 0 && e.key === "Enter") {
        createListElement();
        input.classList.toggle('expandinput');
    }
}
input.addEventListener("keypress", addListOnEnter);
