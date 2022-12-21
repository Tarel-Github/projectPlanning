function myProjectList() {
  $.ajax({
    type: "GET",
    url: "/project/get",
    contentType: "json",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {},
    success: function (response) {
      let rows = response.data;
      $("#projectList").empty();
      for (let i = 0; i < rows.length; i++) {
        //게시글의 번호, 작성자, 제목, 내용, 날짜를 가져오며 그에 걸맞는 html을 출력한다.
        let num = i + 1;
        let projectId = rows[i]["projectId"];
        let title = rows[i]["title"];
        let content = rows[i]["content"];
        let createdAt = rows[i]["createdAt"];
        let cAt = createdAt.split("T")[0];
        let updatedAt = rows[i]["updatedAt"];
        let uAt = updatedAt.split("T")[0];

        let temp_html = `   <div type="button" class="projectSlot"  onclick="location.href='/project/${projectId}'" value ="page move">              
                                <tr>                 
                                <!--<tr onclick="location.href='/project/get/${projectId}'" value ="page move">-->
                                    <td style="width: 50px;">${num}</td>
                                    <td style="width: 700px;">${title}</td>
                                    <td style="width: 250px;">${cAt}</td>
                                    <td style="width: 250px;">${uAt}</td>
                                </tr>
                                </div>`;
        $("#projectList").append(temp_html);
      }
      let plus = `
            <div style="text-align:center">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"  data-bs-target="#newProjectModeal" >프로젝트 추가</button>
            </div>
            <td style="width: 5%; min-width: 75px;">
                <div class="modal fade" id="newProjectModeal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">새로운 프로젝트 작성</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">프로젝트 제목 입력:</label>
                                        <textarea class="form-control" id="postProjectTitle"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                    <button type="button" class="btn btn-primary" onclick="newProject()">추가하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            `;
      $("#projectList").append(plus);
    },
    error: function (error) {
      alert("가져오기 에러");
    },
  });
}

function newProject() {
  let title = $("#postProjectTitle").val();
  $.ajax({
    type: "POST",
    url: "/project/post",
    contentType: "application/json",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: JSON.stringify({
      title: title,
    }),
    success: function (response) {
      alert(response["message"]);
      window.location.reload();
    },
    error: function (error) {
      alert("포스트 에러");
    },
  });
}

function chatList() {
  $("#projectList").empty();
  let newRoom = ` 

    <div style="text-align:center">
    <button type="button" class="btn btn-outline-primary" onclick="location.href='/chat'" value ="page move">채팅방 입장</button>
    </div>
    `;
  $("#projectList").append(newRoom);
}

function otherProjectList() {
  $("#projectList").empty();
  let otherProjectList = ` 
    <div style="text-align:center">
    타인 프로젝트 열람 기능은 준비중입니다.
    </div>
  `;
  $("#projectList").append(otherProjectList);
}

function gameList() {
  $("#projectList").empty();
  let game = ` 
    <div style="text-align:center">
    게임기능은 준비중입니다.</br>
    <button type="button" class="btn btn-outline-primary" onclick="location.href='/game/001'" value ="page move">게임 시작</button>
    </div>
  `;
  $("#projectList").append(game);
}
