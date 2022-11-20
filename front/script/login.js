function login() {
  let identifier = $("#identifier").val();
  let password = $("#password").val();

  $.ajax({
    type: "POST",
    url: "/user/login",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    contentType: "application/json",
    data: JSON.stringify({
      identifier: identifier,
      password: password,
    }),
    success: function (response) {
      alert(response["message"]);
      //window.location.reload();
      gotoMainPage()
    },
    error: function (error) {
      alert("아이디 또는 비밀번호 에러 입니다.");
      customAlert(error.responseJSON.errorMessage);
    },
  });
}

function signup() {
  let identifier = $("#signup_identifier").val();
  let password = $("#signup_password").val();
  let confirm = $("#signup_confirm").val();
  let nickname = $("#signup_nickname").val();
  $.ajax({
    type: "POST",
    url: "/user/signup",
    // headers: {
    //   authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
    contentType: "application/json",
    data: JSON.stringify({
      identifier: identifier,
      password: password,
      confirm: confirm,
      nickname: nickname,
    }),
    success: function (response) {
      alert(response["message"]);
      //window.location.reload();
    },
    error: function (error) {
      alert("입력내용을 확인해 주세요.");
      customAlert(error.responseJSON.errorMessage);
    },
  });
}


function dup() {
  let identifier = $("#signup_identifier").val();

  $.ajax({
    type: "POST",
    url: "/user/signup/dup",
    // headers: {
    //   authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
    contentType: "application/json",
    data: JSON.stringify({
      identifier: identifier,
    }),
    success: function (response) {
      alert(response["message"]);
      //window.location.reload();
    },
    error: function (error) {
      alert("사용할 수 없는 아이디 입니다..");
      customAlert(error.responseJSON.errorMessage);
    },
  });
}

function gotoMainPage(){
  location.href=`/main`
}

function customAlert(text, confirmCallback) {
  $("#alertText").text(text);
  $("#alertModal").modal("show");
  if (confirmCallback) {
    $("#alertModal .btn-confirm").click(confirmCallback);
  }
}

