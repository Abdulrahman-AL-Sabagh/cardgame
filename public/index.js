let card = document.getElementById("card");
let max = 100;
let header = new Array(max);
let hints = new Array(max * 3)
let i = 0;

let color = new Array(3);
color = newCard(color)

function newCard(color) {
    i++;
    if (i <= header.length) {
        i = 0;
    }
    color = new Array(3);
    for (let i = 0; i < color.length; i++) {
        color[i] = randomColor()
        color[i] = Math.floor(color[i]);

    }

    return color;
}


function randomColor() {
    let i = Math.random() * 220 + 1;
    return i;
}

let forms = document.getElementsByClassName("form")
for (let i = 0; i < forms.length; i++) {
    let x = Math.floor(Math.random() * 80 + 10);
    let y = Math.floor(Math.random() * 5);
    let t = Math.floor(Math.random() * 15 + 3);

    //background animations
    forms[i].style.width = `${x}px`;
    forms[i].style.height = `${x}px`
    forms[i].style.left = `${i*9}%`;
    forms[i].style.animationDuration = `${t}s`;
    forms[i].style.animationDelay = `${y}s`;
    forms[i].style.background = `url(/img/bubble.png)`;
    forms[i].style.backgroundSize = `cover`;
    forms[i].style.backgroundRepeat = `no-repeat`;


}

function setColor(variable) {
    variable = `rgb(${color[0]},${color[1]},${color[2]})`;
    return variable;
}
document.getElementById("header").style.background = setColor(this)
for (let i = 0; i < document.getElementsByClassName("hint").length; i++) {
    document.getElementsByClassName("hint")[i].style.color = setColor(this)
}
card.style.border = `${setColor(this)} 5px solid`;
document.getElementById("button").style.background = setColor(this);
document.getElementById("timer").style.color = setColor(this)

function timer() {
    for (let i = 90; i >= 0; i--) {
        setTimeout(() => {
            document.getElementById("timer").innerHTML = 90 - i;
            console.log(i)
            if ((90 - i) == 0) {
                document.getElementById("timer").innerHTML = "انتهى الوقت"
            }


        }, i * 1000);
    }
}
timer()