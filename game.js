var max_number = 30;
if(document.getElementById("title").innerHTML == "Hard Mode"){
    max_number = 200;
}

getNewProblem();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNewProblem(){
    var num1 = getRandomInt(max_number);
    var num2 = getRandomInt(max_number);

    const ADJUST = [-1, 0, 1]

    var displayed_sol = num1 + num2 + ADJUST[getRandomInt(2)];

    var prompt = document.getElementById("prompt");
    prompt.innerHTML = `${num1} + ${num2} = ${displayed_sol}`

    var correct = document.getElementById("correct");
    var wrong = document.getElementById("wrong");

    if (num1 + num2 == displayed_sol){ // prompt is correct
        correct.addEventListener("click", function() {
            getNewProblem();
        });
        wrong.addEventListener("click", function() {
            window.location.replace("/over");
        });
    } else { // prompt isn't correct
        correct.addEventListener("click", function() {
            window.location.replace("/over");
        });
        wrong.addEventListener("click", function() {
            getNewProblem();
        });
    }
}