let userscore = 0, compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
let idx=0;
let change=true;
const user_score = document.querySelector(".user-score");
const comp_score = document.querySelector(".comp-score");
const drawGame = () => {
    console.log("Draw");
     msg.innerText = "Its a draw!!";
     msg.style.backgroundColor="black";

}

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const showwinner = (userwin,userid,compchoice) => {
    if(userwin)
        {
            userscore++;
            user_score.innerText=userscore;
            console.log("You win");
            msg.innerText = `You win. Your ${userid} beats ${compchoice}!!`;
            msg.style.backgroundColor="green";
        }
    else{
        compscore++;
        comp_score.innerText=compscore;
        console.log("Computer wins");
        msg.innerText = `You lose. ${compchoice} beats your ${userid}!!`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userid) =>{
    const compchoice= genComputerChoice();
    console.log("user choice: ",userid);
    console.log("comp choice: ",compchoice);

    if(userid==compchoice)
        {
            drawGame();
        }
    else{
        let userwin=true;
        if(userid==="rock")
        {
            userwin = compchoice === "paper" ? false : true ;
            idx = compchoice === "paper" ? 1 : 2 ;
        }
        else if(userid==="paper")
            {
                userwin = compchoice === "scissors" ? false : true ;
                idx = compchoice === "scissors" ? 2 : 0 ;
            }
        else{
            userwin = compchoice === "rock" ? false : true ;
            idx= compchoice === "rock" ? 0 : 1 ;
        }
        showwinner(userwin,userid,compchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userid = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userid);
    })
})