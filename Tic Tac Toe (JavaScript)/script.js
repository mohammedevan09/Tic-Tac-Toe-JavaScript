let turnAudio = new Audio("files/ting.mp3");
let gameOverAudio = new Audio("files/gameOver.mp3");
let turn = "X";
let gameOver = false;
let count = 0;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [6, 4, 2],
  ];
  wins.forEach((e) => {
    // console.log(boxtext[e[0]],e[0])
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won the game!";
      gameOver = true;
      gameOverAudio.play();
      e.forEach((i) => {
        boxtext[i].style.backgroundColor = "#fd93f6";
      });
    }
  });
};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((elem) => {
  let boxText = elem.querySelector(".boxtext");
  elem.addEventListener("click", () => {
    if (!gameOver && boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnAudio.play();
      count++;
      //   console.log(count)
      checkWin();
      if(count==9 && !gameOver){
        document.querySelector(".info").innerText = "Game Tied!!";
        for(let i = 0; i<9;i++){
            boxes[i].style.backgroundColor = "blue"
        }
        gameOverAudio.play()
      }else if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For - " + turn;
      }
    }
  });
});


let reset = document.getElementById("reset")
reset.addEventListener("click", ()=>{
  location.reload()
})