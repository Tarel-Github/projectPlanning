const socket = io();

const joinRoomDiv = document.getElementById("joinRoomDiv");
const form = joinRoomDiv.querySelector("form");

const chatRoomDiv = document.getElementById("chatRoomDiv");

const room = document.getElementById("chatRoomDiv");

room.hidden = true;

let roomName;
let myname;

//시작하자마자 실행되는 함수
$(document).ready(function () {
  console.log("이건 실행 되었나???");
  console.log(socket);
  console.log(socket.request);
  //test();
  getMyName();
});

//let test = async (req, res, next) => console.log(res)

function getMyName() {
  $.ajax({
    type: "GET",
    url: "/main/chatName",
    contentType: "application/json",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {},
    success: function (response) {
      //alert(response["data"] + "님 환영합니다.");
      myname = response["data"]
      sendNickname(event)
    },
    error: function (error) {
      alert(error);
    },
  });
}

function backToMain() {
  window.location.replace("/main");
}

//누군가 들어오면 들어왔다고 메시지 추가
function addMessage(message) {
  const ul = chatRoomDiv.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  console.log(message)
  console.log(message.split(":")[0])
  if(message.split(":")[0]==="본인"){
    const mymsg = `<li style="text-align:right; background-color: white;">${message.split(":")[1]}</li>`
    $("#chatSpace").append(mymsg);
    //ul.appendChild(mymsg)
  }else{
    const msg = `<li style="text-align:left">${message}</li>`
    $("#chatSpace").append(msg);
    //ul.appendChild(li);
  }

}

//새로운 메시지를 보낸다.
//이때, newMessage이벤트로 입력값과 방이름을 보내준다.
//socket이 실행되기 전에 input.value가 빈칸이 될 수 있다.
//고로 value변수를 새로 추가해 준다.
function sendMessage(event) {
  event.preventDefault();
  const input = chatRoomDiv.querySelector("#msg input");
  const value = input.value;
  socket.emit("newMessage", input.value, roomName, () => {
    addMessage(`본인: ${value}`);
  });
  input.value = "";
}

//닉네임을 설정하는 함수
function sendNickname(event) {
  event.preventDefault();
  // const input = chatRoomDiv.querySelector("#name input");
  // socket.emit("nickname", input.value);
  socket.emit("nickname", myname);
}

//방 안에서 실행되는 함수 중 하나
function showRoom(msg) {
  joinRoomDiv.hidden = true;
  room.hidden = false;
  console.log(`백엔드가 받은 메시지`, msg);
  const h3 = room.querySelector("h3");
  h3.innerText = `방이름: ${roomName}`;
  const msgForm = chatRoomDiv.querySelector("#msg");
  const nameForm = chatRoomDiv.querySelector("#name");
  msgForm.addEventListener("submit", sendMessage);
  nameForm.addEventListener("submit", sendNickname);
}

function enterRoom(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", enterRoom);

//누군가 들어왔을 때 메시지 생성 함수 실행
socket.on("welcome", (user, countUser) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `방이름: ${roomName} (${countUser})`;
  addMessage(`${user} 들어옴`);
});

socket.on("bye", (left, countUser) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `방이름: ${roomName} (${countUser})`;
  addMessage(`${left} 분이 나감!`);
});

socket.on("newMessage", addMessage);

socket.on("room_change", (rooms) => {
  const roomList = joinRoomDiv.querySelector("ul");
  roomList.innerHTML = "";
  if (rooms.length === 0) {
    roomList.innerHTML = "";
    return;
  }
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
