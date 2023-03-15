import { createStyles, IconButton, Theme, Typography, withStyles } from "@material-ui/core"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"

import { WithStyles } from "@material-ui/styles"
import React from "react"
import { CSSProperties } from "styled-components"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { DEFAULT_44 } from "../../theme/ConstantColors"
import { Close } from "@mui/icons-material"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: DEFAULT_44,
      color: "white"
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
  customStyle?: CSSProperties | undefined
  font?: string | undefined
  color?: string | undefined
}
const TitleDialog = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, font, color, customStyle, ...other } = props
  return (
    <DialogTitle
      disableTypography
      className={classes.root}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        ...customStyle
      }}
      {...other}
    >
      <Typography variant="h6" style={{ fontFamily: font, color: color }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{ color: color }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
})

export default TitleDialog
