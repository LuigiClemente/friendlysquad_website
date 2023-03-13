import { IncomingForm } from "formidable"

const formidable = require("formidable")

const fs = require("fs-extra")
var Minio = require("minio")
var mv = require("mv")

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

        var fileStream = fs.createReadStream(files?.image?.filepath?.toString())
        var metaData = {
          "Content-type": fields.type
        }
        var minioClient = new Minio.Client({
          endPoint: "88.208.199.131",
          port: 9000,
          useSSL: false,
          accessKey: "minioadmin",
          secretKey: "minioadmin"
        })
        const name = "images/" + fields.filename
        minioClient.bucketExists("bookingtemplate", function (err, exists) {
          // check if bucket exists
          if (err) {
            return console.log(err)
          }
          if (exists) {
            console.log("Bucket exists.")

            minioClient.putObject(
              "bookingtemplate",
              name.toString(),
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

        res.status(200).json({ fields, files })
      })
    } catch (error) {
      console.log("error reading file ", error)
    }
  })

  res.status(200).json({ message: "success" })
}
