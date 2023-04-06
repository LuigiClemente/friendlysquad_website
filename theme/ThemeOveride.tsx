import { Theme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  SECONDARY_LIGHT,
  PRIMARY_LIGHT,
  PRIMARY_TEXT_LIGHT,
  HOVER_COLOR,
  ERROR_COLOR,
  DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT,
  DEFAULT_BACKGROUND_COLOR_LIGHT,
  SECONDARY_TEXT_LIGHT,
  DISABLED_COLOR,
  HINT_TEXT_LIGHT,
  DIVIDER_COLOR_LIGHT,
  PRIMARY_TEXT_DARK,
  DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK,
  DEFAULT_BACKGROUND_COLOR_DARK,
  SECONDARY_TEXT_DARK,
  HINT_TEXT_DARK,
  DIVIDER_COLOR_DARK,
  SECONDARY_DARK,
  PRIMARY_DARK,
} from "./ConstantColors";

const themeOverrides: Partial<Theme> = {
  overrides: {
    MuiTableCell: {
      body: {
        paddingBottom: 8,
        paddingTop: 8,
        root: {
          borderBottomColor: SECONDARY_LIGHT + "!important",
          borderBottom: "0.5px solidSECONDARY_LIGHT+ !important",
        },
      },
      root: {
        height: 56,
        paddingBottom: 4,
        paddingTop: 4,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "1.5rem !important",
        backgroundColor: PRIMARY_LIGHT + "!important",
      },
      input: {
        backgroundColor: PRIMARY_LIGHT + "!important",
      },
    },
    MuiButtonBase: {
      root: {
        backgroundColor: PRIMARY_LIGHT + "!important",
      },
    },
    MuiTableRow: {
      root: {
        "&:hover": {
          backgroundColor: SECONDARY_LIGHT + "!important",
        },
      },
    },
    MuiMenuItem: {
      root: {
        "&:hover": {
          backgroundColor: SECONDARY_LIGHT + "!important",
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: PRIMARY_LIGHT + "!important",
        border: "1px solid " + SECONDARY_LIGHT + "!important",
      },
    },
    MuiSwitch: {
      switchBase: {
        color: PRIMARY_TEXT_LIGHT + "!important",
        backgroundColor: "transparent" + "!important",
        "&:hover": {
          backgroundColor: "transparent" + "!important",
          // color: PRIMARY_TEXT_LIGHT + "!important",
          borderColor: "transparent !important",
        },
        "&$checked": {
          "& + $track": {
            backgroundColor: PRIMARY_LIGHT + "!important",
          },
        },
        "&$checked + $track": {
          backgroundColor: PRIMARY_LIGHT + "!important",
        },
        thumb: {
          backgroundColor: PRIMARY_LIGHT + "!important",
        },
      },
    },
  },
};

export default themeOverrides;

export const lightTheme = createTheme({
  palette: {
    // type: "light",
    primary: {
      main: HOVER_COLOR,
      contrastText: PRIMARY_TEXT_LIGHT,
    },
    secondary: {
      main: "#000",
      contrastText: PRIMARY_TEXT_LIGHT,
    },
    error: {
      main: ERROR_COLOR,
      contrastText: PRIMARY_TEXT_LIGHT,
    },

    background: {
      paper: DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT,
      default: DEFAULT_BACKGROUND_COLOR_LIGHT,
    },
    text: {
      primary: PRIMARY_TEXT_LIGHT,
      secondary: SECONDARY_TEXT_LIGHT,
      disabled: DISABLED_COLOR,
      // hint: HINT_TEXT_LIGHT,
    },

    divider: DIVIDER_COLOR_LIGHT,
  },
  ...themeOverrides,
});

export const DarkTheme = createTheme({
  palette: {
    // type: "dark",
    primary: {
      main: HOVER_COLOR,
      contrastText: PRIMARY_TEXT_DARK,
    },

    secondary: {
      main: PRIMARY_TEXT_DARK,
      contrastText: PRIMARY_TEXT_DARK,
    },
    error: {
      main: ERROR_COLOR,
      contrastText: PRIMARY_TEXT_DARK,
    },
    background: {
      paper: DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK,
      default: DEFAULT_BACKGROUND_COLOR_DARK,
    },
    text: {
      primary: PRIMARY_TEXT_DARK,
      secondary: SECONDARY_TEXT_DARK,
      disabled: DISABLED_COLOR,
      // hint: HINT_TEXT_DARK,
    },
    divider: DIVIDER_COLOR_DARK,
  },
  // overrides: {
  //   MuiListItem: {
  //     root: {
  //       "&:hover": {
  //         // backgroundColor: SECONDARY_DARK + "!important",
  //         color: HOVER_COLOR + "!important"
  //       },
  //       // for active item
  //       "&$selected": {
  //         backgroundColor: SECONDARY_DARK + "!important"
  //       }
  //     }
  //   },
  //   MuiSwitch: {
  //     switchBase: {
  //       color: PRIMARY_TEXT_DARK + "!important",
  //       backgroundColor: "transparent" + "!important",
  //       "&:hover": {
  //         backgroundColor: "transparent" + "!important",
  //         color: PRIMARY_TEXT_DARK + "!important",
  //         borderColor: PRIMARY_DARK + "!important"
  //       },
  //       "&$checked": {
  //         color: PRIMARY_TEXT_DARK + "!important",
  //         "& + $track": {
  //           backgroundColor: PRIMARY_DARK + "!important"
  //         }
  //       },
  //       "&$checked + $track": {
  //         backgroundColor: PRIMARY_DARK + "!important"
  //       },
  //       thumb: {
  //         color: PRIMARY_TEXT_DARK + "!important",
  //         backgroundColor: PRIMARY_DARK + "!important"
  //       }
  //     }
  //   },
  //   MuiInputBase: {
  //     root: {
  //       fontSize: "1.5rem !important",
  //       backgroundColor: PRIMARY_DARK + "!important"
  //     },
  //     input: {
  //       backgroundColor: PRIMARY_DARK + "!important"
  //     }
  //   },
  //   MuiButtonBase: {
  //     root: {
  //       backgroundColor: PRIMARY_DARK + "!important"
  //     }
  //   },
  //   MuiTableRow: {
  //     root: {
  //       "&:hover": {
  //         backgroundColor: SECONDARY_DARK + "!important"
  //       }
  //     }
  //   },
  //   MuiMenuItem: {
  //     root: {
  //       "&:hover": {
  //         backgroundColor: SECONDARY_DARK + "!important"
  //       },
  //       "&$selected": {
  //         backgroundColor: SECONDARY_DARK + "!important"
  //       },
  //       "&:active": {
  //         backgroundColor: SECONDARY_DARK + "!important"
  //       }
  //     }
  //   },
  //   MuiTableCell: {
  //     root: {
  //       borderColor: SECONDARY_DARK + "!important"
  //     }
  //   },
  //   MuiPaper: {
  //     root: {
  //       backgroundColor: PRIMARY_DARK + "!important",
  //       border: "1px solid " + SECONDARY_DARK + "!important"
  //     }
  //   },
  //   MuiSnackbarContent: {
  //     root: {
  //       borderColor: SECONDARY_DARK + "!important"
  //     }
  //   },

  //   MuiIconButton: {
  //     root: {
  //       "&:hover": {
  //         backgroundColor: "transparent !important",
  //         border: "none !important"
  //       },
  //       "&$checked": {
  //         "& + $track": {
  //           backgroundColor: PRIMARY_DARK + "!important"
  //         }
  //       },
  //       "&$checked + $track": {
  //         backgroundColor: PRIMARY_DARK + "!important"
  //       },
  //       thumb: {
  //         backgroundColor: PRIMARY_DARK + "!important"
  //       }
  //     }
  //   },

  //   MuiSelect: {
  //     root: {
  //       borderColor: "#0EAEE0" + "!important"
  //     }
  //   }
  // }
});
