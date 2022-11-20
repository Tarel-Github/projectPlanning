function myWorkList() {
    console.log("내 작업 리스트")
    $.ajax({
        type: "GET",
        url: "/project/get",
        contentType: "json",
        data: {},
        success: function (response) {
            
            let rows = response 

            for (let i = 0; i < rows.length; i++){      //게시글의 번호, 작성자, 제목, 내용, 날짜를 가져오며 그에 걸맞는 html을 출력한다.
              let postsId = rows[i]['postsId']
              let user = rows[i]['user']
              let title = rows[i]['title']
              let content = rows[i]['content']
              let date = rows[i]['createdAt']
              let temp_html = `                                  
                                <tr>
                                    <td style="width: 700px;" onclick="location.href='/api/posts/${postsId}'" value ="page move">${title}</td>
                                    <td style="width: 150px;">${user}</td>
                                    <td style="width: 250px;">${date}</td>
                                </tr>`
              $('#projectList').append(temp_html)                 
            }

        }
    })
}