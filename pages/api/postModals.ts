// const fs = require("fs-extra")
import fs from "fs-extra"
import { FILE_PATH_GET_API } from "../../config"

export default async function handler(req, res) {
  console.log("req.body", req.body)
  // write to a folder called "db" in the root of the project in a file called "db.json"
  fs.writeFileSync(
    FILE_PATH_GET_API  + "/modals.json",
    JSON.stringify(req.body.file)
  )
  res.status(200).json({ message: "success" })
}
