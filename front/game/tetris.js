//우선, 그리드부터 깔자
$(document).ready(function () {
    grid();
  });

//시작하기 전에, 그리드 부터 까는 작업
function grid() {
    let grid
    for (let i = 1; i < 20; i++) {
        grid = `<tr id="grid${i}">`
        $(`#tetrisGrid`).append(grid)
        for (let j = 0; j <10; j++){
            let a =`<td id="[${i},${j}]"></td>`
            $(`#grid${i}`).append(a);
        }
    }
}

let blockList =[]
const min = 0;
const max = 7;
//게임시작 여부
let start = false

//게임 시작
function startGame(){
    start = true;
    getBlockStart()

    play = setInterval(function() {
        if(blockList.length < 5){
            blockList.push(Math.floor(Math.random()*(max-min) + min)) 
            //getBlock(Math.floor(Math.random()*(max-min) + min));
        }
        console.log(blockList)
        console.log("타이머 함수")
    }, 1000);
     
}

//키입력, 스페이스바, 아래로 내리는 명령
window.onkeydown = (space) => {
    if(!start) return;

    console.log(space);
}
//키입력, 방향키 명령
window.onkeydown = (ArrowLeft) => {
    if(!start) return;

    console.log(ArrowLeft);
}
window.onkeydown = (ArrowRight) => {
    if(!start) return;

    console.log(ArrowRight);
}
window.onkeydown = (ArrowDown) => {
    if(!start) return;

    console.log(ArrowDown);
}
//방향키 상단은 회전 명령
window.onkeydown = (ArrowUp) => {
    if(!start) return;

    console.log(ArrowUp);
}



//게임을 처음 시작했을 때, 블록 리스트를 생성
function getBlockStart(){
    for(let i=0; i<5; i++){
        blockList.push(Math.floor(Math.random()*(max-min) + min)) 
    }
}
  
function getBlock(n){
    console.log("-------------------------------")
    console.log(n)
    
    for(let i = 0; i <5; i++) {
        blockList.push(n) 
    }
}


function Block_0_Box(){

}
function Block_1_Stick(){
    
}

function Block_2_T(){
    
}

function Block_3_S1(){
    
}
function Block_4_S2(){
    
}
function Block_5_L1(){
    
}
function Block_6_L2(){
    
}
