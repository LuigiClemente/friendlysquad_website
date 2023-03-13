// you can change the MIME type of a resource by setting the Content-Type header in the response of the resource.
import { NextApiRequest, NextApiResponse } from "next"
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json")
  res.status(200).json({ message: "Hello World" })
}
