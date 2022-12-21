//우선, 그리드부터 깔자
$(document).ready(function () {
    grid();
  });

//시작하기 전에, 그리드 부터 까는 작업
function grid() {
    console.log("실행은 도ㅒㅆ는지")
    let grid
    for (let i = 1; i < 20; i++) {
        grid = `<tr id="grid${i}">`
        $(`#tetrisGrid`).append(grid)
        for (let j = 0; j <10; j++){
            let a =`<td id="[${i},${j}]"></td>`
            console.log(a)
            $(`#grid${i}`).append(a);
        }
    }
}
  
