var Minio = require("minio")

export default async function handler(req, res) {
  var minioClient = new Minio.Client({
    endPoint: "88.208.199.131",
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin"
  })
  let miniData = ""
  minioClient.getObject("booking-asset", "App.json", function (err, exData) {
    exData.on("data", function (chunk) {
      miniData += chunk
    })
    exData.on("end", function (chunk) {
      console.log("response ===>", miniData)
      res.status(200).json(JSON.parse(miniData))
    })
  })

  // const fileNames = ["container.json", "modals.json"]
  // var stream = minioClient.listObjects("booking-asset", "", true)
  // var landing = []
  // stream.on("data", function (obj) {
  //   let miniData = ""
  //   minioClient.getObject("booking-asset", obj.name, function (err, exData) {
  //     exData.on("data", function (chunk) {
  //       miniData = chunk
  //       landing.push({ [obj.name]: miniData })
  //     })
  //   })
  // })
  // stream.on("error", function (err) {
  //   console.log(err)
  // })
  // console.log("data --------------->", landing)
  // res.status(200).json(landing)
  // res.status(200).json(JSON.parse(landing))
}
