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
                let todoId = rows[i]['todoId']
                let check = rows[i]['check']
                let createdAt = rows[i]['createdAt']
                let cAt = createdAt.split("T")[0]
                let cAt_2 = cAt.split("-")[1] + "-"+ cAt.split("-")[2]
                let updatedAt = rows[i]['updatedAt']
                let uAt = updatedAt.split("T")[0]
                let uAt_2 = uAt.split("-")[1] + "-"+ uAt.split("-")[2]
                let temp_html = `               
                    <tr>
                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">

                        <td style="width: 8%; min-width: 50px;">${check}</td>               
                        <td style="width: 8%; min-width: 50px;">${num}</td>
                        <td style="width: 40%; min-width: 200px;">${title}</td>
                        <td style="width: 12.5%; min-width: 75px;">${cAt_2}</td>
                        <td style="width: 12.5%; min-width: 75px;">${uAt_2}</td>
                        <td style="width: 5%; min-width: 75px;">
                            <div style="text-align:center"> 
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#todo${todoId}" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                    수정
                                </button>
                            </div>

                            <div class="modal fade" id="todo${todoId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">투두 편집</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <div class="mb-3">
                                                    <label for="message-text" class="col-form-label">입력내용:</label>
                                                    <textarea class="form-control" id="putTodoContent${todoId}"></textarea>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                                <button type="button" class="btn btn-primary" onclick="putTodo(${todoId})">수정하기</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>


                        <td style="width: 5%; min-width: 75px;">
                            <div style="text-align:center"> 
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deletetodo${todoId}" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                    삭제
                                </button>
                            </div>

                            <div class="modal fade" id="deletetodo${todoId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">삭제하시겠습니까?</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                            
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                            <button type="button" class="btn btn-primary" onclick="deleteTodo(${todoId})">삭제</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </td>

                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">

                    </tr>
                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                    `
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
                    <tr style="width: 99%;"   value ="page move">                 
                        <td style="width: 7.5%; min-width: 50px;">${num}</td>
                        <td style="width: 50%; min-width: 200px;">${title}</td>
                        <td style="width: 15%; min-width: 75px;">${cAt_2}</td>
                        <td style="width: 15%; min-width: 75px;">${uAt_2}</td>
                        <td style="width: 5%; min-width: 75px;">
                            <button type="button" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                수정
                            </button>


                        </td>

                        
                        <td style="width: 5%; min-width: 75px;">


                            <div style="text-align:center"> 
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteplan${planId}" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                    삭제
                                </button>
                            </div>

                            <div class="modal fade" id="deleteplan${planId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">삭제하시겠습니까?</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                            
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                            <button type="button" class="btn btn-primary" onclick="deletePlan(${planId})">삭제</button>
                                        </div>

                                    </div>
                                </div>
                            </div>




                        </td>

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
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
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

function putTodo(param) {
    let content = $("#putTodoContent"+param).val();
    $.ajax({
        type: "PUT",
        url: "/todo/put/edit/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
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


function deleteTodo(param) {
    $.ajax({
        type: "DELETE",
        url: "/todo/delete/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
        data: JSON.stringify({
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


function deletePlan(param) {
    $.ajax({
        type: "DELETE",
        url: "/plan/delete/"+param,
        contentType: "application/json",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}`},
        data: JSON.stringify({
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