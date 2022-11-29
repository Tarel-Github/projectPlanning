const FileRepository = require("./file.repository"); //리포지토리의 내용을 가져와야한다.

class FileService {
  fileRepository = new FileRepository();

  postFileText = async (userId, projectId, title, content) => {
    const postFile = await this.fileRepository.postFileText(
      userId,
      projectId,
      title,
      content
    );
    return postFile;
  };

  postFileImage = async (fileId, projectId, imageName) => {
    // const imageFilename = [];
    // for (let i = 0; i < imageName.length; i++) {
    //   imageFilename.push(imageName[i].split("/")[4]);
    // }
    const postFileImage = await this.fileRepository.postFileImage(
      fileId,
      projectId,
      imageName
    );
    return postFileImage;
  };

  //===========================
  getFile = async (projectId, req) => {
    const getText = await this.fileRepository.getFileText(projectId);
    const getImage = await this.fileRepository.getFileImage(projectId);

    let merge = new Array();
    for (let i = 0; i < getText.length; i++) {
      let array = new Array();
      array.push(getText[i]);
      array.push(getImage[i]);
      merge.push(array);
      array = [];
    }

    return merge;
  };

  postFile = async (projectId, title, content) => {
    const postFile = await this.fileRepository.postFile(
      projectId,
      title,
      content
    );
    return postFile;
  };

  putFile = async (fileId, title, content) => {
    const putFile = await this.fileRepository.putFile(fileId, title, content);
    return putFile;
  };

  deleteFile = async (fileId) => {
    const deleteFile = await this.fileRepository.deleteFile(fileId);
    return deleteFile;
  };
}

module.exports = FileService;
