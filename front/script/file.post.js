function postFile(){
    let address = unescape(location.href)
    let param = address.split("/")[6];
    let title = $("#fileTitle").val();
    let content = $("#fileContent").val();
    let formdata = new FormData();
    console.log(title, content)
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "/file/post/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
        data: formData,
        success: function (response) {

            alert(response["msg"]) 
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
  