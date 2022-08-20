let display = document.getElementById("inputext");

let calculate = (number) => {
    display.value += number;
}

let result = () => {
    try {
        display.value = eval(display.value)
    }
    catch(err) {
        alert(display.value+" -> IT'S NOT A VALID INPUT");
    }
}

function c() {
    display.value = "";
}

function ce(){
    display.value = display.value.slice(0,-1)
}

function sqrt () {
    display.value = Math.sqrt(display.value);
}

function playAudio(url) {
    new Audio(url).play();
  }

// VISITS COUNTER PAGE

const count = document.getElementById("count");

incrementVisitsCount ();

function incrementVisitsCount() {
    let visits = 0;
    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    visits = +localStorage.getItem("visits");
    const incrementedCount = visits + 1;

    localStorage.setItem("visits", incrementedCount);
    count.innerText = localStorage.getItem("visits");
}