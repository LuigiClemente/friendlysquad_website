var Minio = require("minio")

export default async function handler(req, res) {
  var minioClient = new Minio.Client({
    endPoint: "88.208.199.131",
    port: 9000,
    useSSL: false,
    accessKey: "minioadmin",
    secretKey: "minioadmin"
  })

  let miniData
  minioClient.getObject("booking-asset", "modals.json", function (err, data) {
    data.on("data", function (chunk) {
      miniData += chunk
    })
    data.on("end", function (chunk) {
      const response = JSON.stringify(miniData)
      res.status(200).json({ response })
    })
  })
  return miniData
}
