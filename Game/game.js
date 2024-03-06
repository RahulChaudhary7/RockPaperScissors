let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    let options = ["rock" , "paper" , "scissers"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was Draw.")
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userchoice , compChoice) => {
    if (userWin)  {
        userscore++;
        userScorePara.innerText = userscore
        // console.log("You Win!") 
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compScorePara.innerText = compscore
        // console.log("You Lose")
        msg.innerText = `You Lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice",userchoice);
    // ganerate computer choice 
    const compChoice = genComChoice();
    console.log("computer choice",compChoice);

    if(userchoice === compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if (userchoice === "rock") {
           userWin = compChoice === "paper" ? false : true ;
        } else if(userchoice === "paper") {
            userWin = compChoice === "scissers" ? false : true ;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoice  ,compChoice);
    }
}


choices.forEach((choice) => {
    console.log(choice)
    const userchoice = choice.getAttribute("id")
    choice.addEventListener("click" , () => {
        // console.log("choice was clicked" , userchoice);
        playgame(userchoice)
    })
});