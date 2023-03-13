import { FILE_PATH_GET_API, FOLDER_IMAGE_PATH } from "config"
import { IncomingForm } from "formidable"

const formidable = require("formidable")

const fs = require("fs-extra")
import path from "path"

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}

export default async (req: any, res: any) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    try {
      form.parse(req, async (err, fields, files) => {
        console.log("=======>", fields.path, fields.filename, files?.image?.filepath?.toString())
        if (err) {
          console.log("Error parsing the files")
          return res.status(400).json({
            status: "Fail",
            message: "There was an error parsing the files",
            error: err
          })
        }

        var fileStream = fs.createReadStream(files?.image?.filepath?.toString())
        var metaData = {
          "Content-type": fields.type
        }
        const targetPath = path.join(
          process.cwd(),
          FILE_PATH_GET_API + `${fields.id}` + "/" + fields.filename
        )
        // check if file exists and delete it

        fs.pathExists(targetPath, (err, exists) => {
          if (exists) {
            fs.remove(targetPath, (err) => {
              if (err) return console.error(err)
              console.log("success!")
            })
          }
          console.log(err) // => null
          console.log(exists) // => false
        })

        fs.move(files?.image?.filepath?.toString(), targetPath, (err) => {
          if (err) return console.error(err)
          console.log("success!")
        })
        const name = "images/" + fields.filename

        // const targetPath = path.join(FOLDER_IMAGE_PATH + fields.filename)

        console.log("targetPath", targetPath)
        if (path.extname(fields.filename).toLowerCase() === ".png") {
          fs.rename(files?.image?.filepath?.toString(), targetPath, (err) => {
            if (err) {
              console.log("error is =>", err)
            }
            res.status(200)
          })
        } else {
          fs.unlink
          res.status(403)
        }

        res.status(200).json({ fields, files })
      })
    } catch (error) {
      console.log("error reading file ", error)
    }
  })

  res.status(200).json({ message: "success" })
}
