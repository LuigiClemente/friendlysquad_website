const fs = require("fs-extra")
import { FILE_PATH_GET_API, FILE_PATH_MODALS_GET_API } from "../../config"
export default async function handler(req, res) {
  const query = req.query
  const { id } = query
  const db: any = fs.readFileSync(FILE_PATH_MODALS_GET_API)
  res.status(200).json(JSON.parse(db))
}
