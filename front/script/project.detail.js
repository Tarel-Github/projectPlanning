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
                let cAt_2 = cAt.split("-")[1] + "-"+ cAt.split("-")[2]
                let updatedAt = rows[i]['updatedAt']
                let uAt = updatedAt.split("T")[0]
                let uAt_2 = uAt.split("-")[1] + "-"+ uAt.split("-")[2]
                let temp_html = `               
                    <tr>
                        <div>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                        </div>

                        <td style="width: 8%; min-width: 50px;">${check}</td>               
                        <td style="width: 8%; min-width: 50px;">${num}</td>
                        <td style="width: 40%; min-width: 200px;">${title}</td>
                        <td style="width: 12.5%; min-width: 75px;">${cAt_2}</td>
                        <td style="width: 12.5%; min-width: 75px;">${uAt_2}</td>
                        <div>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                        </div>
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
                let temp_html = `               
                    <tr style="width: 99%;" onclick="location.href='/project/plan/${planId}'" value ="page move">                 
                        <td style="width: 10%; min-width: 50px;">${num}</td>
                        <td style="width: 60%; min-width: 200px;">${title}</td>
                        <td style="width: 15%; min-width: 75px;">${cAt_2}</td>
                        <td style="width: 15%; min-width: 75px;">${uAt_2}</td>
                        <button type="button" class="btn btn-primary btn-sm">Small button</button>
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

function postTodo() {
    let address = unescape(location.href)
    let param = address.split("/")[4];
    let content = $("#todoContent").val();
    $.ajax({
        type: "POST",
        url: "/todo/post/"+param,
        contentType: "application/json",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: JSON.stringify({
            title : content,
        }),
        success: function (response) {

            alert(response["message"]) 
            window.location.reload()
          },
        error: function (error) {
            customAlert(error.responseJSON.errorMessage);
        },
    });
}

function check() {

}






function customAlert(text, confirmCallback) {
    $("#alertText").text(text);
    $("#alertModal").modal("show");
    if (confirmCallback) {
        $("#alertModal .btn-confirm").click(confirmCallback);
    }
}   