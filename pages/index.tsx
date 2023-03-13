import { AppProvider } from "@appProvider/AppProvider"
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider"
import UndoableProvider from "@appProvider/UndoableProvider"
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import { CssBaseline, Skeleton } from "@mui/material"
import dynamic from "next/dynamic"
import React from "react"
const DynamicHome = dynamic(() => import("@/HomeComponent"), {
  loading: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <Skeleton
        style={{ padding: "10px", width: "80%", height: "100px", margin: "50px" }}
        animation="wave"
      />
    </div>
  ),
  ssr: false
})
// export const config = { amp: "hybrid" }
export default function Home() {
  const [isLoad, setIsLoad] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
    }, 1000)
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <UndoableProvider>
        <AppProvider>
          <UpdateSettingsProvider>
            <ModalsAppProvider>
              <DynamicHome />
            </ModalsAppProvider>
          </UpdateSettingsProvider>
        </AppProvider>
      </UndoableProvider>
    </React.Fragment>
  )
}

// load tow json file  faster
// export async function getStaticProps() {
//   const res = await fetch(FILE_PATH_LANDING)
//   const data = await res.json()
//   const res2 = await fetch(FILE_PATH_HEADER)
//   const data2 = await res2.json()
//   console.log("zzz", data, data2)
//   return {
//     props: {
//       data,
//       data2
//     }
//   }
// }
