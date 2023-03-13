export const HOVER_COLOR = "#177DDC"
export const wHITE_COLOR = "#ffffff"
export const ERROR_COLOR = "#ba000d"
export const DISABLED_COLOR = "#757575"
export const DARK_GRAY = "#3B3B3B"
export const LIGHT_GREY = "rgb(239, 235, 235)"

// for dark theme
// this is for background color of table header, list header, etc
export const PRIMARY_DARK = "#252525"
// this is for hover table row, list item, etc
export const SECONDARY_DARK = "#2F2F2F"
export const PRIMARY_TEXT_DARK = "#f5f5f5"
export const HINT_TEXT_DARK = "#E5E4E2"
//
export const SECONDARY_TEXT_DARK = "#757575"
// this is for body background
export const DEFAULT_BACKGROUND_COLOR_DARK = "#2F2F2F"
// this is for container background
export const DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK = "#252525"

export const DIVIDER_COLOR_DARK = "#252525"

// for light theme

// export const PRIMARY_LIGHT = "#3B3B3B";
export const PRIMARY_LIGHT = "#fff"
export const SECONDARY_LIGHT = "#f5f5f5"
export const PRIMARY_TEXT_LIGHT = "#000"
export const HINT_TEXT_LIGHT = "#A9A9A9"

export const SECONDARY_TEXT_LIGHT = "#2F2F2F"
export const DEFAULT_BACKGROUND_COLOR_LIGHT = "#f5f5f5"
export const DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT = "#fff"
export const DIVIDER_COLOR_LIGHT = "#f5f5f5"

//  for site
export const DEFAULT_COLOR_SITE = "#202844"

// all font family  in the app
export const FONT_FAMILY = [
  "Inter",
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
  "Arial"
]
export const SHADOW = [
  { name: "none", value: "none" },
  { name: "shadow 1", value: "rgba(149, 157, 165, 0.2) 0px 8px 24px" },
  { name: "shadow 2", value: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" },
  { name: "shadow 3", value: "rgba(0, 0, 0, 0.16) 0px 1px 4px" },
  {
    name: "shadow 4",
    value: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
  },
  {
    name: "shadow 5",
    value: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
  },
  {
    name: "shadow 6",
    value: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
  },
  {
    name: "shadow 7",
    value: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
  },
  {
    name: "shadow 8",
    value: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px"
  },
  { name: "shadow 9", value: "box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" },
  {
    name: "shadow 10",
    value:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
  },
  {
    name: "shadow 11",
    value:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
  }
]

export const FONT_SIZE_LIST = [
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.125rem",
  "1.25rem",
  "1.5rem",
  "1.75rem",
  "2rem",
  "2.25rem",
  "2.5rem",
  "2.75rem",
  "3rem",
  "3.25rem",
  "3.5rem",
  "3.75rem",
  "4rem",
  "4.25rem",
  "4.5rem",
  "4.75rem",
  "5rem",
  "5.25rem",
  "5.5rem"
]
export const BORDER_STYLE = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
  "initial",
  "inherit"
]

// this is for booking
export const DEFAULT_44 = "#202844"
export const YELLOW = "#F8E9AC"
export const GREEN = "#5BD62A"

export const styleLightCalendar = `<style>

.react-datepicker {
  color: #0a0909 !important;
  background-color: #fff  !important;
}
.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  color: #0a0909;
}
.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color:  #0a0909 !important;
}
.react-datepicker__header {
  background-color: #f4ecec !important;
  border-bottom: 1px solid #aeaeae;
 
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  color: #f4ecec !important;
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  background-color: #2b68aa !important;
}
.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  color: #000 !important;
}

</style>`

export const styleDarkCalendar = `<style>
.react-datepicker {
  color: rgb(249, 239, 239) !important;
  background-color: #0a0909 !important;

}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  color: rgb(243, 242, 242);
 
}
.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color: #f5e8e8 !important;
 
}
.react-datepicker__header {
  background-color: #201d1d !important;
  border-bottom: 1px solid #aeaeae;
 
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  color: #f4ecec !important;
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  background-color: #2b68aa !important;
}
.react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
  color:  #f4ecec !important;
}

</style>`

// export const DEFAULT_TEXT_LIGHT = "#363616"
// export const DEFAULT_ICON_LIGHT = "#000"
// export const DEFAULT_COLOR = "#363636"
// export const DEFAULT_COLOR_TASK = "#726E6D"
// export const SECONDRY_COLOR = "#d9d9d9"
// export const DEFAULT_TEXT_DARK = "#F2F2F2"
// export const DEFAULT_BACKGROUND_INPUT = "#252525"
// export const DEFAULT_BACKGROUND_BUTTON_HOVER = "#050505"
// export const DEFAULT_INPUT_TEXT = "#eee8e8"
// export const DEFAULT_TEXT = "#eee8e8"
// export const DEFAULT_PAPER = "#252525"
// export const DEFAULT_PAPER_LIGHT = "#F5F5F5"
// export const DEFAULT_HOVER_LIGHT = "#009BFF"
// export const DEFAULT_HOVER_DARK = "#009BFF"
// export const DEFAULT_TOOLTIP_LIGHT_BORDER = "#E6E8ED"
// export const DEFAULT_BACKGROUND = "#303030"
// export const DEFAULT_HOVER = "#1890ff"
