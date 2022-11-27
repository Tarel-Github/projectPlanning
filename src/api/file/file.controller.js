const FileService = require("./file.service");

class FileController {
  fileService = new FileService();

  uploadFile = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { title, content } = req.body;
      const image = req.file;

      const postFileText = await this.fileService.postFileText(
        userId,
        title,
        content
      );

      if (image) {
        const fileId = postFileText.fileId;
        //const imageUrl = image.map((url) => url.location);
        const imageName = image.filename;
        console.log(imageName);
        await this.fileService.postFileImage(fileId, imageName);
      }

      res.status(200).json({ msg: "test 성공", data: postFileText });
    } catch (err) {
      return res.status(500).json({ message: "test 실패", error: err });
    }
  };

  //해당 프로젝트의 모든 파일 가져오기
  getFile = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const getFile = await this.fileService.getFile(projectId);
      return res.status(200).json({ message: "file리스트", data: getFile });
    } catch (err) {
      return res.status(500).json({ message: "getFile실패", error: err });
    }
  };

  //새로운 파일 작성하기
  postFile = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { projectId } = req.params;
      const { title, content } = req.body;

      const postFile = await this.fileService.postFile(
        projectId,
        title,
        content
      );
      return res.status(200).json({ message: "새로운file", data: postFile });
    } catch (err) {
      return res.status(500).json({ message: "postFile실패", error: err });
    }
  };

  //기존 파일 수정하기
  putFile = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { fileId } = req.params;
      const { title, content } = req.body;

      const putFile = await this.fileService.putFile(fileId, title, content);

      if (putFile.matchedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: putFile });
      }

      return res.status(200).json({ message: "file수정완료", data: putFile });
    } catch (err) {
      return res.status(500).json({ message: "putFile실패", error: err });
    }
  };

  //기존 파일 제거하기
  deleteFile = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { fileId } = req.params;

      const deleteFile = await this.fileService.deleteFile(fileId);

      if (deleteFile.deletedCount === 0) {
        return res.status(400).json({ message: "대상없음", data: deleteFile });
      }

      return res.status(200).json({ message: "플랜 삭제", data: deleteFile });
    } catch (err) {
      return res.status(500).json({ message: "deleteFile실패", error: err });
    }
  };
}

module.exports = FileController;
