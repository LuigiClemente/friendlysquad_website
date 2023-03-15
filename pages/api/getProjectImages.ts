import type { NextApiRequest, NextApiResponse } from "next"
const fs = require("fs-extra")
import path from "path"

const BANNER_IMAGE = "img/"
type Data = {
  directory: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const directory = path.resolve("./public", BANNER_IMAGE)
    const fileNames = fs.readdirSync(directory)
    const images = fileNames.map((item) => {
      return {
        filename: path.parse(item).name,
        path: path.join("/", BANNER_IMAGE, item).replace(/\\/g, "/")
      }
    })
    res.status(200).json({ directory: images })
  } catch (e) {
    res.status(400).json({ directory: null })
  }
}
