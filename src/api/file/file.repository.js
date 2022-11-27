const File = require("../../db/schemas/file");
const FileData = require("../../db/schemas/fileData");

class FileRepository {
  postFileText = async (userId, title, content) => {
    const date = new Date();
    let fileId = date.valueOf();
    let createdAt = date;
    let updatedAt = createdAt;
    const postFileText = await File.create({
      fileId,
      userId,
      title,
      content,
      createdAt,
      updatedAt,
    });
    return postFileText;
  };

  postFileImage = async (fileId, imageName) => {
    const date = new Date();
    let fileDataId = date.valueOf();
    let createdAt = date;
    let updatedAt = createdAt;

    const postFileImage = await FileData.create({
      fileDataId,
      fileId,
      fileImage: imageName,
      createdAt,
      updatedAt,
    });
    return postFileImage;

    // for (let i = 0; i < imageName.length; i++) {
    //   await FileData.create({
    //     fileDataId,
    //     fileId,
    //     fileImage: imageName[i],
    //     createdAt,
    //     updatedAt,
    //   });
    // }
  };

  getFile = async (projectId) => {
    const getFile = await File.find({ projectId: projectId });
    return getFile;
  };

  postFile = async (projectId, title, content) => {
    const date = new Date();
    let createdAt = date;
    let updatedAt = createdAt;
    let fileId = date.valueOf();
    const postFile = await File.create({
      fileId,
      projectId,
      title,
      content,
      createdAt,
      updatedAt,
    });
    return postFile;
  };

  putFile = async (fileId, title, content) => {
    const putFile = await File.updateOne(
      { fileId: fileId },
      { $set: { title, content } }
    );
    const data = await File.find({ fileId: fileId });
    return data;
  };

  deleteFile = async (fileId) => {
    const deleteFile = await File.remove({ fileId: fileId });
    return deleteFile;
  };
}

module.exports = FileRepository;
