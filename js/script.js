// Get Elements From Document
let restart = document.querySelector("#restart");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let output = document.querySelector("#output");
let chances = document.querySelector("#chances");

// Add Event Listener
restart.addEventListener("click", restartGame);
one.addEventListener("click", guess);
two.addEventListener("click", guess);
three.addEventListener("click", guess);
four.addEventListener("click", guess);
five.addEventListener("click", guess);
six.addEventListener("click", guess);
seven.addEventListener("click", guess);
eight.addEventListener("click", guess);
nine.addEventListener("click", guess);
ten.addEventListener("click", guess);

// Functions & Variable Declarations
let guessNum = 1;
let number = Math.floor(getRandomArbitrary(1, 11));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function restartGame(e) {
    location.reload();
}

function guess(e) {

    if (number < e.target.textContent && guessNum < 3) {
        result(e.target.textContent, "large");
    } else if (number > e.target.textContent && guessNum < 3) {
        result(e.target.textContent, "small");
    } else if (number == e.target.textContent && guessNum < 3) {
        result(e.target.textContent, "win");
        disableButtons();
    } else {
        if (number == e.target.textContent) {
            result(e.target.textContent, "win");
            disableButtons();
        } else {
            result(e.target.textContent, "lose");
            disableButtons();
        }
    }

    let chancesNum = 3 - guessNum;
    chances.textContent = `Chances Are Left : ${chancesNum}`;

    ++guessNum;

    e.target.classList.add("disabled");
}

function result(num, result) {

    switch (result) {
        case "large":
            output.innerHTML = `${num} Is Larger Than The Correct Number!`;
            output.className = "text-center mt-3 large-small";
            break;
        case "small":
            output.innerHTML = `${num} Is Smaller Than The Correct Number!`;
            output.className = "text-center mt-3 large-small";
            break;
        case "win":
            output.innerHTML = `${num} Is The Correct Number. You Win!`;
            output.className = "text-center mt-3 win";
            break;
        default:
            output.innerHTML = "You Lose!";
            output.className = "text-center mt-3 lose";
    }
}


function disableButtons() {
    one.classList.add("disabled");
    two.classList.add("disabled");
    three.classList.add("disabled");
    four.classList.add("disabled");
    five.classList.add("disabled");
    six.classList.add("disabled");
    seven.classList.add("disabled");
    eight.classList.add("disabled");
    nine.classList.add("disabled");
    ten.classList.add("disabled");
}