$(document).ready(function () {//상시실행함수인데 일단은 넣어두기
    getTodo();
    getPlan();
});


function getTodo() {
    let address = unescape(location.href)
    let param = address.split("/")[4];
    console.log(param)
    $.ajax({
        type: "GET",
        url: "/todo/get/"+param,
        contentType: "application/json",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: JSON.stringify({
        }),
        success: function (response) {
            console.log(response)
            let rows = response.data
            for (let i = 0; i < rows.length; i++){
                let num = i+1;
                let title = rows[i]['title']
                let check = rows[i]['check']
                let createdAt = rows[i]['createdAt']
                let cAt = createdAt.split("T")[0]
                let updatedAt = rows[i]['updatedAt']
                let uAt = updatedAt.split("T")[0]
                let temp_html = `               
                    <tr>                 
                        <td style="width: 5%;">${num}</td>
                        <td style="width: 50%;">${title}</td>
                        <td style="width: 25%;">${cAt}</td>
                        <td style="width: 25%;">${uAt}</td>
                    </tr>`
                    $('#todoList').append(temp_html)        

            }
            //alert(response["message"]) 
            // window.location.reload()
          },
        error: function (error) {
            customAlert(error.responseJSON.errorMessage);
        },
        
    });
}


function getPlan() {
    let address = unescape(location.href)
    let param = address.split("/")[4];
    console.log(param)
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
            console.log(response)
            let rows = response.data
            for (let i = 0; i < rows.length; i++){
                let num = i+1;
                let planId= rows[i]['planId']
                let title = rows[i]['title']
                let createdAt = rows[i]['createdAt']
                let cAt = createdAt.split("T")[0]
                let updatedAt = rows[i]['updatedAt']
                let uAt = updatedAt.split("T")[0]
                let temp_html = `               
                    <tr onclick="location.href='/project/plan/${planId}'" value ="page move">                 
                        <td style="width: 5%;">${num}</td>
                        <td style="width: 50%;">${title}</td>
                        <td style="width: 25%;">${cAt}</td>
                        <td style="width: 25%;">${uAt}</td>
                    </tr>`
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




function customAlert(text, confirmCallback) {
    $("#alertText").text(text);
    $("#alertModal").modal("show");
    if (confirmCallback) {
        $("#alertModal .btn-confirm").click(confirmCallback);
    }
}   