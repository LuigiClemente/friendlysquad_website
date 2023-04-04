// import fs from "fs-extra"
const fs = require("fs-extra")
import { FILE_PATH_CONTENT_GET_API, FILE_PATH_GET_API, FILE_PATH_HEADER_GET_API } from "../../config"
export default async function handler(req, res) {
  console.log("req.body", req.body)
  // fs.writeFileSync(FILE_PATH_HEADER_GET_API, JSON.stringify(req.body))
  fs.writeFileSync(FILE_PATH_CONTENT_GET_API+"/en/content.json",
    JSON.stringify(req.body.file)
  )
  res.status(200).json({ message: "success" })
}
