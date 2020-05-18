window.onload = () => {
    document.getElementById("button1").addEventListener("click", playGame);
    document.getElementById("button2").addEventListener("click", initGame);
}

function getRandomInt() {
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber*100) + 1;
    return wholeNumber;
}

let answer = getRandomInt();
let guesses = [];

function saveGuestHistory(guess){
    guesses.push(guess);
}


function playGame(){
    const num = document.getElementById("num").value;
    displayResult(num);
    saveGuestHistory(num);
    showHistory(guesses);
}

function initGame(){
    window.location.reload();
}

function displayResult(num){
    if(num < answer){
        showNumberBelow();
    }else if(num > answer){
        showNumberAbobe();
    }else{
        showYouWon();
    }

}


function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>";
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon(){
    const text = "Awesome job, You got it!!";
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbobe(){
    const text = "Your guess is too high!!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
    const text = "Your guess is too low!!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showHistory(guesses){
    let index;
    let list = "<ul class = 'list-group'>"
        for(index=0;index<guesses.length;index++){
            list += "<li class='list-group-item'>" + 
            "You guessed: " + guesses[index] + "</li>"
        }
    list +="</ul>"
    document.getElementById("history").innerHTML = list;
}
