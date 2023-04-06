import { FILE_PATH_CONTENT_GET_API } from "config";

// import fs from "fs-extra"
const fs = require("fs-extra")
export default async function handler(req, res) {
  const folderLanguage = req.body.language;
  const data = req.body.file;
  // console.log("req.body", data, FILE_PATH_CONTENT_GET_API+folderLanguage+"/test.json",JSON.stringify(req.body.file))
  // console.log("currentPage====>",req.body.currentPage)

  const fileName=req.body.currentPage+".json"
  const filePath = FILE_PATH_CONTENT_GET_API+folderLanguage+"/"+fileName;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log(`File created at location: ${filePath}`);
  } else {
    console.log(`File already exists at location: ${filePath}`);
  

  // Read the existing JSON data from the file
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const existingData = JSON.parse(fileContents);
  
  // Merge the existing data with the new data
  const updatedData = { ...existingData, ...data };
  
  // Write the updated JSON data back to the file
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  }

  res.status(200).json({ message: "success" })
}
