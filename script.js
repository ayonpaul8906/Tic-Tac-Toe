let container = document.querySelector(".game")
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn")
let msg_container = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnX = true;

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText ="⛌";
            turnX = false;
        }
        else{
            box.innerText ="◯";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();

    })
})

const disabled_boxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
const enabled_boxes = () =>{
    boxes.forEach((box) => {
        box.disabled = false;
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabled_boxes();
};


const checkWinner = (winner) =>{
    for (pattern of winPatterns){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
                container.classList.add("hide2")
                resetBtn.classList.add("hide2")
            }
        }
    }
}

function reset(){
    alert("Game has been reset. Let's play again!");
    boxes.forEach((box) => {
        box.innerText = "";

    })
    
    msg_container.classList.add("hide");
    enabled_boxes();
    turnX = true;
}

function newgame(){
    alert("Enjoy Game Again!");
    boxes.forEach((box) => {
        box.innerText = "";

    })

    msg_container.classList.add("hide");
    container.classList.remove("hide2")
    resetBtn.classList.remove("hide2")
    enabled_boxes();
    turnX = true;
}

resetBtn.addEventListener("click",reset);
newGame.addEventListener("click",newgame);