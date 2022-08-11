const allchecks = document.querySelectorAll('.bottom ul li :nth-child(3)');
// console.log(allchecks);
document.getElementById('counter').innerHTML = allchecks.length;

//1st - all working
allchecks.forEach((check, x) => {
    check.addEventListener('click', () => {
        var y = x+1;
        document.querySelector("li:nth-child(" + y + ") > span:nth-child(1)").classList.toggle("bggrey");
        document.querySelector("li:nth-child(" + y + ") > p").classList.toggle("donetasks");
        document.querySelector("li:nth-child(" + y + ") > span:nth-child(3)").classList.toggle("checkdot"); 
        document.querySelector("li:nth-child(" + y + ") > span:nth-child(3) > i").classList.toggle("checkmark");

        if(document.querySelector("li:nth-child(" + y + ") > span:nth-child(3) > i").classList.contains("checkmark")){
            document.querySelector("li:nth-child(" + y + ") > span:nth-child(3)").setAttribute("onclick","incrementClick()");
        }else if(document.querySelector("li:nth-child(" + y + ") > span:nth-child(3) > i").classList.contains("checkmark") == false){
            document.querySelector("li:nth-child(" + y + ") > span:nth-child(3)").setAttribute("onclick","decrementClick()");
        }
    });
});


// inc & dec
var counterVal = allchecks.length;

function decrementClick() {
    if(counterVal>0){
        updateDisplay(--counterVal);
    }
}

function incrementClick(){
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter").innerHTML = val;
}
// inc & dec
















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
