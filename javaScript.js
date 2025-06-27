const state = {
    view:{ 
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values:{},
};

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomNumber = state.view.squares[randomNumber];
    randomSquare.classList("enemy");
}


function addListanerHitBox(){
 state.view.squares.forEach((square)=>{
    if(square.id ===);
 });
}


function initialize(){

}
initialize();