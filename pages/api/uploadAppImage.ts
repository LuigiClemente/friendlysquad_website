// @ts-ignore 
var Minio = require("minio")
import { IncomingForm } from "formidable"
const formidable = require("formidable")
const fs = require("fs-extra")

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}
export default async (req: any, res: any) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    console.log("-req---->>>", req)
    try {
      form.parse(req, async (err, fields, files) => {
        if (err) return reject(err)
        resolve({ fields, files })

        console.log("-filename---->>>", fields.filename)
        console.log("-path---->>>", fields.path)
        console.log("-type---->>>", fields.type)
        console.log("-ext---->>>", fields.ext)

        const filepath = fields.path.toString()
        const type = fields.type

        var fileStream = fs.createReadStream(filepath)

        var metaData = {
          "Content-type": type
        }

        var minioClient = new Minio.Client({
          endPoint: "88.208.199.131",
          port: 9000,
          useSSL: false,
          accessKey: "minioadmin",
          secretKey: "minioadmin"
        })

        // var fileStream = fs.createReadStream(FILE_IMAGE_GET_API1)

        minioClient.bucketExists("bookingtemplate", function (err, exists) {
          // check if bucket exists
          if (err) {
            return console.log(err)
          }
          if (exists) {
            console.log("Bucket exists.")

            minioClient.putObject(
              "bookingtemplate",
              "40mbNewFile",
              fileStream,
              metaData,
              function (err, etag) {
                if (err) return console.log(err)
                console.log("File uploaded successfully.")
              }
            )
          } else {
            console.log("Bucket does not exist.")
            // create bucket
            minioClient.makeBucket("bookingtemplate", "us-east-1", function (err) {
              if (err) return console.log("Error creating bucket.", err)
              console.log('Bucket created successfully in "us-east-1".')
              // upload file
              minioClient.putObject(
                "bookingtemplate",
                name,
                fileStream,
                metaData,
                function (err, etag) {
                  if (err) return console.log(err)
                  console.log("File uploaded successfully.")
                }
              )
            })
          }
        })
        res.status(200).json({ message: "success" })
      })
    } catch (err) {
      console.log("err", err)
    }
  })
  // res.status(200).json(data)
}
