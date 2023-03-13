var Minio = require("minio")

export default async function handler(req, res) {
  const name = "db/" + req.body.name
  const file = req.body.file
  const folderName = "db/"
  console.log("req is ====>", req.body.file)
  var metaData = {
    "Content-Type": "application/json"
    // 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'
    // Access-Control-Allow-Origin: *
    // app.use(bodyParser.json()) // handle json data
    // app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
  }

  var minioClient = new Minio.Client({
    endPoint: "88.208.199.131",
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin"
  })
  // booking-asset
  minioClient.bucketExists("bookingtemplate", function (err, exists) {
    // check if bucket exists
    if (err) {
      return console.log(err)
    }
    if (exists) {
      console.log("Bucket exists.")
      // create a text file for jsonData
      minioClient.putObject(
        "bookingtemplate",
        name,
        req.body.file + "",
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
          req.body.file + "",
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
}
