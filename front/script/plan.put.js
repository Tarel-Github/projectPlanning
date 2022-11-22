$(document).ready(function () {//상시실행함수인데 일단은 넣어두기
    getData();
});


function getData() {
    let address = unescape(location.href)
    let param = address.split("/")[4];
    $.ajax({
        type: "GET",
        url: "/plan/get/"+param,
        contentType: "application/json",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: JSON.stringify({
        }),
        success: function (response) {
            let rows = response.data
            console.log(rows.title)
            console.log(rows.content)


            for (let i = 0; i < rows.length; i++){
                let num = i+1;
                let planId= rows[i]['planId']
                let title = rows[i]['title']
                let createdAt = rows[i]['createdAt']
                let cAt = createdAt.split("T")[0]
                let cAt_2 = cAt.split("-")[1] + "-"+ cAt.split("-")[2]
                let updatedAt = rows[i]['updatedAt']
                let uAt = updatedAt.split("T")[0]
                let uAt_2 = uAt.split("-")[1] + "-"+ uAt.split("-")[2]
                let temp_html = `      `
                    $('#planList').append(temp_html)        
            }
            //alert(response["message"]) 
            // window.location.reload()
          },
        error: function (error) {
            customAlert(error.responseJSON.errorMessage);
        },
    });
}


function putPlan() {
    let address = unescape(location.href)
    let param = address.split("/")[4];

    let title = $("planTitle").val();
    let content = $("#planContent").val();
    $.ajax({
        type: "PUT",
        url: "/plan/post/"+param,
        contentType: "application/json",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: JSON.stringify({
            title: title,
            content: content,
        }),
        success: function (response) {
            let rows = response.data
            alert(response["message"]) 
            // window.location.reload()
          },
        error: function (error) {
            alert("에러") ;
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
  