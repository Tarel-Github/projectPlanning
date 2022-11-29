//const FileService = require("./file.service");
const fs = require("fs"); //멀터

class imageFile {
  imageFile = async (req, res) => {
    const temp = req._parsedUrl.path.split("/")[2];
    fs.readFile("./storage/" + temp, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  };
}

module.exports = imageFile;
