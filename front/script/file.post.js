

function postFile(){
    let address = unescape(location.href)
    let param = address.split("/")[6];

    const imageInput = $("#file_get")[0]

    let formdata = new FormData();
    formdata.append("title", $("#fileContent"));
    formdata.append("content",$("fileContent"));
    formdata.append("name", imageInput.files[0]);


    //이미지를 올릴땐 enctype, processData, contentType을 넣을 것
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/file/post/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
        data: formdata,
        processData: false,
        contentType: false,
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
  