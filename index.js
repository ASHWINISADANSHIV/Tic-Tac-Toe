
console.log(" Welcome to Tic Tac Toe");
let music = new Audio("Natural-Love-Imperss-Music-Original-Mix-2021-FreeDL.mp3");
let audioturn = new Audio("mixkit-fast-small-sweep-transition-166.wav");
let over = new Audio("game-over-arcade-6435.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
   
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7 ],
        [2, 5, 8 ],
        [0, 4, 8 ],
        [2, 4, 6 ],
    ];
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won";
            gameover = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "150px";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // document.querySelector(".line").style.width = "20vw";
        }
    });
};

music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!gameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.info').innerText = "Turn for " + turn;
});
