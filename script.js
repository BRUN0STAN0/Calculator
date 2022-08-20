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

