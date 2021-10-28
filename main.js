let container = document.querySelector("#container");


// First question
let firstStatement = document.querySelectorAll("[name='firstStatement']");
let correct1 = document.querySelector("#correct1");
let false1 = document.querySelector("#false1");
firstStatement.forEach(btn1 => {
    btn1.addEventListener ("click", () => {
        if (btn1.value === "true") {
            correct1.innerHTML = `Correct answer!`;
            false1.innerHTML = ``;
        } else if (btn1.value === "false") {
            false1.innerHTML = `Wrong answer... :(`;
            correct1.innerHTML = ``;
        }
    });
});

// Second question
let secondStatement = document.querySelectorAll("[name='secondStatement']");
let correct2 = document.querySelector("#correct2");
let false2 = document.querySelector("#false2");
secondStatement.forEach(btn2 => {
    btn2.addEventListener ("click", () => {
        if (btn2.value === "true") {
            correct2.innerHTML = `Correct answer!`;
            false2.innerHTML = ``;
        } else if (btn2.value === "false") {
            false2.innerHTML = `Wrong answer... :(`;
            correct2.innerHTML = ``;
        }
    })
})

// Third question
let thirdStatement = document.querySelectorAll("[name='thirdStatement']");
let correct3 = document.querySelector("#correct3");
let false3 = document.querySelector("#false3");
thirdStatement.forEach(btn3 => {
    btn3.addEventListener("click", () => {
        if (btn3.value === "false") {
            correct3.innerHTML = `Correct answer!\nAndromeda is located 2,5 million lightyears from Milky Way!`; 
            false3.innerHTML = ``;
        } else if (btn3.value === "true") {
            false3.innerHTML = `Wrong answer... :(`;
            correct3.innerHTML = ``;
        }
    })
})

// Fourth question
let fourthStatement = document.querySelectorAll("[name='fourthStatement']");
let correct4 = document.querySelector("#correct4");
let false4 = document.querySelector("#false4");
fourthStatement.forEach(btn4 => {
    btn4.addEventListener("click", () => {
        if (btn4.value === "false") {
            correct4.innerHTML = `Correct answer!\nThey have released 25 studio albums in total.`; 
            false4.innerHTML = ``;
        } else if (btn4.value === "true") {
            false4.innerHTML = `Wrong answer... :(`;
            correct4.innerHTML = ``;
        }
    })
})

// Fifth question
let fifthStatement = document.querySelectorAll("[name='fifthStatement']");
let correct5 = document.querySelector("#correct5");
let false5 = document.querySelector("#false5");
fifthStatement.forEach(btn5 => {
    btn5.addEventListener("click", () => {
        if (btn5.value === "false") {
            correct5.innerHTML = `Correct answer!`;
            false5.innerHTML = ``;
        } else if (btn5.value === "true") {
            false5.innerHTML = `Wrong answer... :(`;
            correct5.innerHTML = ``;
        }
    })
})

// Sixth question
let sixthStatement = document.querySelectorAll("[name='sixthStatement']");
let correct6 = document.querySelector("#correct6");
let false6 = document.querySelector("#false6");
sixthStatement.forEach(btn6 => {
    btn6.addEventListener("click", () => {
        if (btn6.value === "true") {
            correct6.innerHTML = `Correct answer! Long live Rock n' Roll!`;
            false6.innerHTML = ``;
        } else if (btn6.value === "false") {
            false6.innerHTML = "Wrong answer... :(";
            correct6.innerHTML = "";
        }
    })
})

// Seventh question
let seventhStatement = document.querySelectorAll("[name='seventhStatement']");
let correct7 = document.querySelector("#correct7");
let false7 = document.querySelector("#false7");
seventhStatement.forEach(btn7 => {
    btn7.addEventListener("click", () => {
        if (btn7.value === "true") {
            correct7.innerHTML = "Correct answer! Light is pretty darn fast!";
            false7.innerHTML = "";
        } else if (btn7.value === "false") {
            false7.innerHTML = "Wrong answer... :(";
            correct7.innerHTML = "";
        }
    })
})

// Eighth question
let eighthStatement = document.querySelectorAll("[name='eighthStatement']");
let correct8 = document.querySelector("#correct8");
let false8 = document.querySelector("#false8");
eighthStatement.forEach(btn8 => {
    btn8.addEventListener("click", () => {
        if (btn8.value === "true") {
            correct8.innerHTML = "Correct answer! The apple didn't fall far from the tree... or did it?";
            false8.innerHTML = "";
        } else if (btn8.value === "false") {
            false8.innerHTML = "Wrong answer... :(";
            correct8.innerHTML = "";
        }
    })
})

// Ninth question
let ninthStatement = document.querySelectorAll("[name='ninthStatement']");
let correct9 = document.querySelector("#correct9");
let false9 = document.querySelector("#false9");
ninthStatement.forEach(btn9 => {
    btn9.addEventListener("click", () => {
        if (btn9.value === "true") {
            correct9.innerHTML = "Correct answer! Eat the rich!";
            false9.innerHTML = "";
        } else if (btn9.value === "false") {
            false9.innerHTML = "Wrong answer...";
            correct9.innerHTML = "";
        }
    })
})

// Tenth question
let tenthStatement = document.querySelectorAll("[name='tenthStatement']");
let correct10 = document.querySelector("#correct10");
let false10 = document.querySelector("#false10");
tenthStatement.forEach(btn10 => {
    btn10.addEventListener("click", () => {
        if (btn10.value === "true") {
            correct10.innerHTML = "Correct! Bob Klose is somewhat of a hidden member of Pink Floyd :)";
            false10.innerHTML = "";
        } else if (btn10.value === "false") {
            false10.innerHTML = "Wrong answer... try again!";
            correct10.innerHTML = "";
        }
    })
})