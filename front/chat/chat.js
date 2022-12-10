const socket = io();

//방만들기 버튼
const createRoom = document.getElementById("createRoom");
//방만들기 이름 입력부분
const roomName = document.getElementById("roomName");
//const room = document.getElementById("room");

//room.hidden = true;

//let roomName;
const chat = document.getElementById("msg");

//나나 상대방이 채팅을 하면 그 내용이 추가
function addMessage(message) {
  const chat = document.getElementById("chat");
  const li = document.createElement("li");
  li.innerText = message;
  chat.appendChild(li);
}

//내가 메시지를 보낸 경우인가?
//html의 input내용을 가져오고
//그것을 소켓 에밋, new_message로 보낸다.
//보내고 나면 input 내용을 초기화 한다.
function handleMessageSubmit(event) {
  event.preventDefault();
  const input = chat.querySelector("#msg input"); //html의 msg의 input 내용을 가져옴
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    //백엔드로 new_message이벤트를 input.value와 함께 보냄
    addMessage(`나: ${value}`);
  });
  input.value = "";
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  const value = input.value;
  socket.emit("nickname", input.value);
}

//지금 있는 채팅방을 보여주기
function showRoom(msg) {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");

  socket.emit("enter_room", input.value, showRoom);
  //socketIO에서는 send가 아닌 emit을 쓴다.
  //소켓 IO에서는 이벤트를 보내줄 수도 있다 (enter_room), 객체를 보내줄 수도 있다.
  roomName = input.value;
  input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);

//유저가 온 상황
socket.on("welcome", (user, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  //welcome 이벤트를 실행
  addMessage(`프론트: ${user}가 왔습니다`);
});

//유저가 떠난 상황
socket.on("bye", (left, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  //bye 이벤트를 실행
  addMessage(`프론트: ${left}가 떠났습니다.`);
});

socket.on("new_message", addMessage);
socket.on("room_change", (rooms) => {
  const roomList = welcome.querySelector("ul");
  roomList.innerHTML = "";
  if (rooms.length === 0) {
    return;
  }

  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
