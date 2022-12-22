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
            let a =`<td id="${i},${j}" class = "empty"></td>`
            $(`#grid${i}`).append(a);
        }
    }
}

let blockList =[]
const min = 0;
const max = 7;
//게임시작 여부
let start = false

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
        let mainSlotArray = `${y},${x}`

        let mainSlot = document.getElementById( mainSlotArray);

        mainSlot.style.backgroundColor = "rgb(255,255,255)"
        AutoDown = setInterval(function() {
            y = y+1
            console.log(y)
        }, 500);

        play = setInterval(function() {
            mainSlotArray = `${y},${x}`
            mainSlot = document.getElementById(mainSlotArray);
            emptySlot = document.getElementsByClassName("empty")
            //emptySlot.style.backgroundColor = "rgba(255,255,255)"
            for(let i=0; i<emptySlot.length; i++){
                emptySlot[i].style.backgroundColor = "rgb(60,60,60)"
            }

            mainSlot.style.backgroundColor = "rgb(255,255,255)"

            if(y >= 19){
                stop(mainSlot)
                return
            }            
        }, 50);


    }catch(e){
        
    }
     
}

//블록이 닿은 경우
function stop(mainSlot){
    mainSlot.style.backgroundColor = "rgb(150,150,150)"
    mainSlot.className="used"
    console.log("stopped")
    y = 0
    x = 5
    //clearInterval(play)
    //게임이 끝나지 않았으면 다시!
    return
}

//시작부분은 0,5
function startControllBlock(){
    let startBlock = blockList[0]
    blockList.shift()
    blockList.push(Math.floor(Math.random()*(max-min) + min)) 

    console.log(blockList)
    console.log(startBlock)
}


document.addEventListener('keydown', (event) => {
    if(!start) return;
    console.log("event.key = " + event.key + "  " + "event.code = " + event.code);

    if(event.key === "ArrowRight"){
        if(x <9)x = x+1;
        
        console.log("오른쪽 키")
    }
    if(event.key === "ArrowLeft"){
        if(x >0)x = x-1;
        
        console.log("왼쪽 키")
    }
    if(event.key === "ArrowDown"){
        if(y <19)y = y+1;
        
        console.log("왼쪽 키")
    }



});

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
