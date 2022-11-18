function login() {
  console.log("이게 되긴 하나?????");
  let identifier = $("#identifier").val();
  console.log("실행??");
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
      console.log("된건가???");
      //window.location.reload();
    },
    error: function (error) {
      customAlert(error.responseJSON.errorMessage);
    },
  });
}

function customAlert(text, confirmCallback) {
  $("#alertText").text(text);
  $("#alertModal").modal("show");
  if (confirmCallback) {
    $("#alertModal .btn-confirm").click(confirmCallback);
  }
}
