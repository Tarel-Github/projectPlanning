function postPlan(){
    let address = unescape(location.href)
    let param = address.split("/")[6];
    let title = $("#planTitle").val();
    let content = $("#planContent").val();
    $.ajax({
        type: "POST",
        url: "/plan/post/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
        data: JSON.stringify({
            title : title,
            content: content,
        }),
        success: function (response) {

            alert(response["message"]) 
            window.location.replace('/project/'+param)
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
  