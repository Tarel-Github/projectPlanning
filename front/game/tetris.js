// const Block = require("./block")
// block = new Block

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
            let a =`<td id="${i},${j}"></td>`
            $(`#grid${i}`).append(a);
        }
    }
}

let blockList =[]
const min = 0;
const max = 7;
//게임시작 여부
let start = false

// //배열 조정 함수
// function updateArray(myArray, oldValue, newValue) {
//     if (!myArray instanceof Array) return;

//     const index = myArray.indexOf(oldValue);
//     if (index !== -1) {
//         myArray[index] = newValue;
//     }
// }

let y = 0
let x = 5

//게임 시작
function startGame(){
    try{
        if (start) return
        start = true;
        getBlockStart()//우선 블록리스트를 만듦
        startControllBlock()//블록리스트에서 최상단을 가져옴
        y = 0
        x = 5
        let mainslotArray = `${y},${x}`

        let mainslot = document.getElementById( mainslotArray);
        console.log(mainslot)
        console.log(mainslot.id)
        console.log(mainslot.id.split(",")[0])

        console.log(mainslot.style.backgroundColor)
        console.log("----------------------------")
        mainslot.style.backgroundColor = "rgb(255,255,255)"



        play = setInterval(function() {
            // if(blockList.length < 5){
            //     blockList.push(Math.floor(Math.random()*(max-min) + min)) 
            //     //getBlock(Math.floor(Math.random()*(max-min) + min));
            // }
            // console.log(blockList)
            console.log("타이머 함수")
            y = y+1
            console.log(y)
            mainslotArray = `${y},${x}`
            mainslot = document.getElementById( mainslotArray);
            mainslot.style.backgroundColor = "rgb(255,255,255)"

            if(y >= 19){
                console.log("asdasdasdasdas")
                stop()
                return
            }
            
        }, 100);



    }catch(e){
        
    }
     
}

//멈춰!
function stop(){
    console.log("stopped")
    clearInterval(play)
}



//시작부분은 0,5
function startControllBlock(){
    let startBlock = blockList[0]
    blockList.shift()
    blockList.push(Math.floor(Math.random()*(max-min) + min)) 

    console.log(blockList)
    console.log(startBlock)
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
