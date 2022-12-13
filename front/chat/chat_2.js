const socket = io();

//1번, html에서 welcome영역과 그 안의 form 영역을 가져온다.
//room 영역도 가져온다.
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

//방에 접속시, 방 이름을 담을 변수다.
let roomName;

//5번, 프론트에서 socket.to(roomName)에서 보낸 welcome 이벤트
//html에서, id가 room인 div에서 ul을 가져온다.
//html에 쓸 li 라는것을 만들고 그 안에 텍스트를 넣는다.
function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

//4번, 3번에서 이 함수를 enter_room이벤트로 보낼 것이다.
//백엔드 코드에선 이걸 실행하라고 되어있는데
//이 함수는 백엔드가 아닌 프론트엔드에서 실행된다.
//만약 백에서 실행된다면 보안문제가 발생한다.
//아무튼 이 함수는 html에서 숨길 것을 숨기고 보여줄것을 보여준다.
//html에서 h3를 찾아서 방이름을 넣는다.
function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");

  h3.innerText = `Room ${roomName}`;
}

//3번, 1번의 form영역의 input을 가져온다. 그리고 그곳의 값을 빈 값으로 한다.
//enter_room이라는 이벤트를 만들고, 그 이벤트에 입력받은 input값을 보낸다.
//이때, 오브젝트나 함수를 보낼 수도 있다.
function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  roomName = input.value;

  //enter_room이라는 이벤트에 여러가지를 보낸다.
  socket.emit("enter_room", input.value, showRoom());

  input.value = "";
}

//2번, 폼영역에 handleRoomSubmit함수에서 가져온걸 넣는다.
form.addEventListener("submit", handleRoomSubmit);

//6번, 5번 함수를 실행한다. 이때 출력할 메시지를 파라미터로 넣는다.
//이 이벤트명은 welcome이다.
//backend파일을 보면 이 메시지는 자신을 제외한 모두에게 전달 된다.
socket.on("welcome", () => {
  addMessage("누군가 옴!");
});

socket.on("bye", () => {
  addMessage("누군가 감!");
});
