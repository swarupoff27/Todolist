var allTasks = [];

var id = 0;
function addinjson(){
    let task = {
        Id: ++id,
        Task: document.getElementById('userInput').value,
    }
    allTasks.push(task);
    console.log('\n' + JSON.stringify(allTasks, '\t', 2));
}

//1st click on button to expand the input and add task.
function expandinput(){
    document.getElementById('userInput').classList.toggle('expandinput');
    if(document.getElementById('userInput').classList.contains('expandinput') == false){
        addinjson();
    }  
}
document.getElementById('btn-addtask').addEventListener("click", expandinput);
    

const addtaskbtn = document.getElementById("btn-addtask");
const input = document.getElementById("userInput");


//2nd create elements
function createListElement() {
    var ul = document.querySelector("ul"); //create unordered list
    var li = document.createElement("li"); //create list item

    var bullet = document.createElement("span");  //create bullet
    bullet.classList.add('bullet'); 
    // bullet.setAttribute("id", "bullet");

    var div = document.createElement("div");   //create div for task
    div.classList.add("tasks");
    div.setAttribute("id", "tasks");

    var checkdot = document.createElement("span");    //create checkdot
    checkdot.classList.add('checkdot');
    // checkdot.setAttribute("id", "checkdot");


    var daydatemonth = document.createElement("p");    //create daydatemonth para
    daydatemonth.classList.add("daydatemonth");

    var task = document.createElement("p");     //create task para
    task.classList.add("task");        
    // var day = document.createElement("span"); //create day
    // var date = document.createElement("span"); //create day
    // var month = document.createElement("span"); //create day

    var checkmark = document.createElement("i"); //create checkmark
    // checkmark.setAttribute("id", "checkmark");
    checkmark.classList.add("fa-solid");
    checkmark.classList.add("fa-check");


    //structuring
    ul.appendChild(li);

    li.appendChild(bullet); 
    li.appendChild(div);
    li.appendChild(checkdot);

    div.appendChild(daydatemonth);
    div.appendChild(task);
    task.appendChild(document.createTextNode(input.value));

    checkdot.appendChild(checkmark);


    // get day date month
    var alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var allmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var now = new Date();


    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();

    // console.log(days[day],",",date,months[month]);
    daydatemonth.appendChild(document.createTextNode(alldays[day] + ","));
    daydatemonth.appendChild(document.createTextNode(date + "  "));
    daydatemonth.appendChild(document.createTextNode(allmonths[month]));

    input.value = ""; //Reset text input field 

    var tasklist = document.querySelectorAll("li");
    document.getElementById("counter").innerHTML = tasklist.length;
    // console.log(tasklist.length);
    var count = tasklist.length;
    
    
    const allcheckdots = document.querySelectorAll('.checkdot'); 
    allcheckdots.forEach((dot) => {
        dot.onclick = (e) => {
            e.target.classList.toggle("checkmark");
            e.target.parentNode.classList.toggle("checkdot-border");
            e.target.parentNode.previousSibling.classList.toggle("done-task");
            e.target.parentNode.previousSibling.previousSibling.classList.toggle("bullet-bggrey");

            if(e.target.classList.contains("checkmark")){
                --count;
                document.getElementById("counter").innerHTML = count;
            }else{
                ++count;
                document.getElementById("counter").innerHTML = count;
            }
          }
    })
}


//makes sure that an empty input field doesn't create a li
function addListAfterClick(){
    if (input.value.length > 0) { 
        createListElement();
    }
}
addtaskbtn.addEventListener("click",addListAfterClick);











//    var obj = [
//         {
//             id: 1,
//             taska_name: "practice js",
//             completed: "true"
//         },
//         {
//             id: 2,
//             taska_name: "dry cleaning",
//             completed: "true"
//         }
//    ]
    
//     obj.push({id: counter.length++});
//     obj.pop();
    // console.log(obj);


// if(allchecks[x].classList.length == 1){
//     allchecks[x].classList.add("checkdot-border");
// }else if(allchecks[x].classList.length == 2){
//     allchecks[x].classList.remove("checkdot-border");
// }


//below structure
  // daydatemonth.appendChild(day);
    // day.setAttribute("id","day");
    // day.appendChild(document.createTextNode("day" + ", "));

    // daydatemonth.appendChild(date);
    // date.setAttribute("id","date");
    // date.appendChild(document.createTextNode("date" + " "));

    // daydatemonth.appendChild(month);
    // month.setAttribute("id","month");
    // month.appendChild(document.createTextNode("month"));
//below structure




// function getdaydatemonth(){
    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var now = new Date();
    // var day = now.getDay();
    // var date = now.getDate();
    // var month = now.getMonth();
    // console.log(days[day],",",date,months[month]);
    // alert(days[day]);
    // alert(date);
    // alert(months[month]);
// }


// if( document.getElementById('userInput').style.width == "250px"){
//     document.getElementById('userInput').focus();
// }


//working without unckecking task
// allchecks.forEach((check, x) => {
//     check.addEventListener('click', () => {
//         var y = x+1;
//         document.querySelector("li:nth-child(" + y + ") > span:nth-child(1)").style.backgroundColor = 'lightgrey';
//         document.querySelector("li:nth-child(" + y + ") > p").style.textDecoration = 'line-through';
//         document.querySelector("li:nth-child(" + y + ") > p").style.color = 'lightgrey';
//         document.querySelector("li:nth-child(" + y + ") > span:nth-child(3)").style.border = '2px solid lightgrey'; 
//         document.querySelector("li:nth-child(" + y + ") > span:nth-child(3) > i").style.opacity = '1';
//     });
// });


// if(document.querySelector("li:nth-child(" + 2 + ") > span:nth-child(3) > i").style.opacity = '1'){
//     document.querySelector("li:nth-child(" + 2 + ") > span:nth-child(3)").removeAttribute("onclick");
// }


// selects previous task onclick next task.
// allchecks.forEach((check, x) => {
//     check.addEventListener('click', () => {
//         document.querySelector("li:nth-child(" + x + ") > span:nth-child(3) > i").style.opacity = '1';
//         document.querySelector("li:nth-child(" + x + ") > p").style.textDecoration = 'line-through';
//         document.querySelector("li:nth-child(" + x + ") > p").style.color = 'lightgrey';
//         document.querySelector("li:nth-child(" + x + ") > span:nth-child(1)").style.backgroundColor = 'lightgrey';
//         document.querySelector("li:nth-child(" + x + ") > span:nth-child(3)").style.border = '2px solid lightgrey'; 
//     });
// });


// selects all at once when click on any one

//   allchecks.forEach((check) => {
//     for(let x = 1; x <= allchecks.length ; x++){
        
//         check.addEventListener('click', () => {
//             document.querySelector("ul > li:nth-child("+ x +") > span:nth-child(3) > i").style.opacity = '1';
//             document.querySelector("ul > li:nth-child("+ x +") > p").style.textDecoration = 'line-through';
//             document.querySelector("ul > li:nth-child("+ x +") > p").style.color = 'lightgrey';
//             document.querySelector("ul > li:nth-child("+ x +") > span:nth-child(1)").style.backgroundColor = 'lightgrey';
//             document.querySelector("ul > li:nth-child("+ x +") > span:nth-child(3)").style.border = '2px solid lightgrey';
//             console.log(x);
//         });
//       }
//   });







// selects all at once on load
// for(let i = 1; i <= allchecks.length ; i++){
//         document.querySelector("ul > li:nth-child("+ i +") > span:nth-child(3) > i").style.opacity = '1';
//         document.querySelector("ul > li:nth-child("+ i +") > p").style.textDecoration = 'line-through';
//         document.querySelector("ul > li:nth-child("+ i +") > p").style.color = 'lightgrey';
//         document.querySelector("ul > li:nth-child("+ i +") > span:nth-child(1)").style.backgroundColor = 'lightgrey';
//         document.querySelector("ul > li:nth-child("+ i +") > span:nth-child(3)").style.border = '2px solid lightgrey';

//   }




// document.querySelector("ul > li:nth-child(" + 1 + ") > span:nth-child(3) > i").style.opacity = '1';
// document.querySelector("ul > li:nth-child(" + 1 + ") > p").style.textDecoration = 'line-through';
// document.querySelector("ul > li:nth-child(" + 1 + ") > p").style.color = 'lightgrey';
// document.querySelector("ul > li:nth-child(" + 1 + ") > span:nth-child(1)").style.backgroundColor = 'lightgrey';
// document.querySelector("ul > li:nth-child(" + 1 + ") > span:nth-child(3)").style.border = '2px solid lightgrey';
