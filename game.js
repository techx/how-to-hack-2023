var max_number = 30;
if(document.getElementById("title").innerHTML == "Hard Mode"){
    max_number = 200;
}

var score = 0;

getNewProblem();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNewProblem(){
    var correct = document.getElementById("correct");
    var wrong = document.getElementById("wrong");
    var prompt = document.getElementById("prompt");

    correct.removeEventListener("click", correctAnswer);
    correct.removeEventListener("click", gameOver);
    wrong.removeEventListener("click", correctAnswer);
    wrong.removeEventListener("click", gameOver);

    var num1 = getRandomInt(max_number);
    var num2 = getRandomInt(max_number);

    const ADJUST = [-1, 0, 1]

    var displayed_sol = num1 + num2 + ADJUST[getRandomInt(2)];

    prompt.innerHTML = `${num1} + ${num2} = ${displayed_sol}`

    if (num1 + num2 == displayed_sol){ // prompt is correct
        correct.addEventListener("click", correctAnswer);
        wrong.addEventListener("click", gameOver);
    } else { // prompt isn't correct
        correct.addEventListener("click", gameOver);
        wrong.addEventListener("click", correctAnswer);
    }
}

function correctAnswer() {
    getNewProblem();
    score++;
    document.getElementById('score').innerHTML = `Score: ${score}`
}

function gameOver(){
    window.location.replace(`/over/${score}`);
}