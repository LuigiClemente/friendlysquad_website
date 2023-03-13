import axios from "axios"
import html2canvas from "html2canvas"
import {
  FILE_PATH_APP,
  FILE_PATH_HEADER,
  FILE_PATH_MODALS,
  PATH_POST_TEMPLATE_LIST,
  TEMPLATE_LIST_PATH
} from "../../config"
const imageCompression = import("browser-image-compression")
export const loadApp = async () => {
  // check the status of the response
  const myRequest = new Request(FILE_PATH_APP, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    cache: "default"
  })
  const response = await fetch(myRequest)
  return await response.json()
}

export const loadHeader = async () => {
  const response = await fetch(FILE_PATH_HEADER)
  return await response.json()
}

export const loadModals = async () => {
  const response = await fetch(FILE_PATH_MODALS)
  return await response.json()
}
export const getCurrentTemplateId = async () => {
  const response = await fetch(TEMPLATE_LIST_PATH)
  return await response.json()
}
export const onUploadImage = async (blob: Blob) => {
  const compressionFile = await (
    await imageCompression
  ).default(blob as File, {
    maxWidthOrHeight: 1440
  })
  return compressionFile
}

export const uploadToServer = async (
  blob: Blob,
  filename: any,
  type: any,
  ext: any,
  apiPath: any,
  templateId: any
) => {
  console.log("File name is :::: >>>", filename)
  const compressImage = await onUploadImage(blob)
  const body = new FormData()
  body.append("path", window.URL.createObjectURL(blob))
  body.append("image", blob)
  // I set only filename
  body.append("filename", filename)
  body.append("type", type)
  body.append("ext", ext)
  body.append("id", templateId)
  await axios
    .post(apiPath, body, {
      headers: { "Content-type": type }
    })
    .then((res) => {
      if (res.status === 200) {
        console.log("upload successfully !")
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        console.log(`HTTP 400 error occured for third request`)
      }
      // You can get response data (mostly the reason would be in it)
      if (error.response.data) {
        console.log("errors ====>", error.response.data)
      }
    })
}

export const handleScreenShot = async () => {
  try {
    const blob = await new Promise<any>((resolve) => {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        return canvas.toBlob(resolve, "png", 0.1)
      })
    })
  } catch (error) {
    return "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841585/use2lx1xqmrhzceshsys.png"
  }
}

export const writeTemplate = async (data: string) => {
  await fetch(PATH_POST_TEMPLATE_LIST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log("res", res)
  })
}

// change millisecond to date
export const convertMillisecondToFormat = (millisecond) => {
  const date = new Date(millisecond)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}
// convert the data millisecond to the format that the calendar needs format to YYYY-MM-DD month name
export const convertMillisecondToFormatMonthName = (millisecond) => {
  const date = new Date(millisecond)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const monthName = monthNames[month - 1]
  return `${day} ${monthName} ${year}`
}

// convert the data millisecond to the format that the calendar needs format to YYYY-MM-DD month name and day name
export const convertMillisecondToFormatMonthNameAndDayName = (millisecond) => {
  const date = new Date(millisecond)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const monthName = monthNames[month - 1]
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayName = dayNames[date.getDay()]
  return `${dayName} ${monthName} ${day} ${year}`
}
