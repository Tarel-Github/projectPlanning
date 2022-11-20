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
            let rows = response.data

            for (let i = 0; i < rows.length; i++){      //게시글의 번호, 작성자, 제목, 내용, 날짜를 가져오며 그에 걸맞는 html을 출력한다.
              let num = i+1;
              let projectId = rows[i]['projectId']
              let title = rows[i]['title']
              let content = rows[i]['content']
              let createdAt = rows[i]['createdAt']
              let cAt = createdAt.split("T")[0]
              let updatedAt = rows[i]['updatedAt']
              let uAt = updatedAt.split("T")[0]
              let temp_html = `                 
                                <tr onclick="location.href='/project/${projectId}'" value ="page move">                 
                                <!--<tr onclick="location.href='/project/get/${projectId}'" value ="page move">-->
                                    <td style="width: 50px;">${num}</td>
                                    <td style="width: 700px;">${title}</td>
                                    <td style="width: 250px;">${cAt}</td>
                                    <td style="width: 250px;">${uAt}</td>
                                </tr>`
              $('#projectList').append(temp_html)                 
            }

        }
    })
}

function myProjectDetail(){

}