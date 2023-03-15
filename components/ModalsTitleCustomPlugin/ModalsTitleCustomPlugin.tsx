import { WithStyles } from "@material-ui/core"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Close } from "@mui/icons-material"
import { createStyles, IconButton, Theme, Tooltip, Typography } from "@mui/material"
import "react-toastify/dist/ReactToastify.css"

import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import { withStyles } from "@mui/styles"
import { PATH_POST_MODALS } from "config"
import { CSSProperties, useState } from "react"
import RedoIcon from "../icons/Redo"
import SaveIcon from "../icons/SaveIcon"
import UndoIcon from "../icons/UndoIcon"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      height: "50px !important"
    },
    closeButton: {
      position: "absolute",
      right: "0px !important",
      top: "0px !important",
      width: "fit-content !important",
      color: theme.palette.grey[500]
    },
    tooltip: {
      backgroundColor: "white",
      color: "#000",
      boxShadow: theme.shadows[1],
      padding: "5px 10px",
      fontSize: "12px"
    },
    arrow: {
      color: "white"
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
  customStyle?: CSSProperties | undefined
  isModals?: boolean
}
const ModalsTitleCustomPlugin = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, customStyle, isModals, ...other } = props
  const { dbModalsFormat }: any = useModalsAppProvider()
  const { undo, isUndoable, content, redo, isRedoable }: any = useUndoable()

  const { setCallUndo, setIsReadOnly }: any = useAppProvider()
  const [isSave, setIsSave] = useState(false)

  // const handleClose = () => {
  //   if (isModals) {
  //     Alert("Save changes for modals")
  //   }
  // }
  // save function
  const callSave = async () => {
    const modalsBody = { file: dbModalsFormat }
    fetch(PATH_POST_MODALS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modalsBody)
    }).then((res) => {
      if (res.status === 200) {
        setIsSave(true)
        return res.json()
      }
    })

    // this is for local PATH_POST_MODALS
    // fetch(`/api/uploadApp`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: "modals.json",
    //     file: dbModalsFormat
    //   })
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       if (isSave) {
    //         toast.success("Changes Saved Successfully", {
    //           position: "top-center",
    //           autoClose: 1000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light"
    //         })
    //       }
    //     } else {
    //       toast.warn("Error: " + res.status + " " + res.statusText, {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light"
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error("Error: " + error, {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light"
    //     })
    //   })
  }

  const handleRedo = () => {
    redo()
    console.log("Redo function:::", content)
    setCallUndo(true)
  }

  const handleUndo = () => {
    undo()
    setCallUndo(content)
    setCallUndo(true)
    console.log("Undo function:::", content)
  }
  return (
    <DialogTitle
      disableTypography
      id="dialog_title_editor"
      className={classes.root}
      {...other}
      style={{
        width: "100%",
        paddingRight: "0px",
        marginRight: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        ...customStyle
      }}
    >
      <Typography variant="h6" component={"span"} className="title_editor">
        {children}
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "230px" }}>
        {isModals ? (
          <>
            <Tooltip
              title="Redo"
              placement="top"
              arrow
              classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
            >
              <span>
                <IconButton
                  className={`toolbox-button btn-info ${classes.sizeBtn}`}
                  sx={{
                    margin: "4px",
                    maxWidth: "130px",
                    width: "50px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  disabled={!isRedoable}
                  onClick={() => {
                    handleRedo()
                  }}
                >
                  <RedoIcon
                    className={classes.iconColor}
                    style={{ width: "25px", height: "25px" }}
                  />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip
              title="Undo"
              placement="top"
              arrow
              classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
            >
              <span>
                <IconButton
                  className={`toolbox-button btn-info ${classes.sizeBtn}`}
                  sx={{
                    margin: "4px",
                    maxWidth: "130px",
                    width: "50px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  disabled={!isUndoable}
                  onClick={handleUndo}
                >
                  <UndoIcon
                    className={classes.iconColor}
                    style={{ width: "25px", height: "25px" }}
                  />
                </IconButton>
              </span>
            </Tooltip>
            <span
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "lightgray"
              }}
            />
            <Tooltip
              title="Save changes for modals"
              placement="top"
              arrow
              classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
            >
              <IconButton
                className={`toolbox-button btn-info ${classes.sizeBtn}`}
                sx={{
                  margin: "4px",
                  maxWidth: "130px",
                  width: "70px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={callSave}
              >
                <SaveIcon className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
              </IconButton>
            </Tooltip>
          </>
        ) : null}
        <span
          style={{
            width: "1px",
            height: "20px",
            backgroundColor: "lightgray"
          }}
        />
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </div>
    </DialogTitle>
  )
})
export default ModalsTitleCustomPlugin
