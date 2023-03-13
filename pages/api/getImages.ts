import { IncomingForm } from "formidable"

const formidable = require("formidable")

const fs = require("fs-extra")
var Minio = require("minio")

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
        console.log("=======>", fields.path)
        if (err) {
          console.log("Error parsing the files")
          return res.status(400).json({
            status: "Fail",
            message: "There was an error parsing the files",
            error: err
          })
        }

        // var fileStream = fs.createReadStream(files?.image?.filepath?.toString())
        // var metaData = {
        //   "Content-type": fields.type
        // }
        var minioClient = new Minio.Client({
          endPoint: "88.208.199.131",
          port: 9000,
          useSSL: false,
          accessKey: "minioadmin",
          secretKey: "minioadmin"
        })
        const name = "images/" + fields.filename
        // move file to public folder

        var size = 0
        minioClient.getObject("bookingtemplate", "photo.jpg", function (err, dataStream) {
          if (err) {
            return console.log(err)
          }
          dataStream.on("data", function (chunk) {
            size += chunk.length
          })
          dataStream.on("end", function () {
            console.log("End. Total size = " + size)
          })
          dataStream.on("error", function (err) {
            console.log(err)
          })
        })

        res.status(200).json({ fields, files })
      })
    } catch (error) {
      console.log("error reading file ", error)
    }
  })

  res.status(200).json({ message: "success" })
}
