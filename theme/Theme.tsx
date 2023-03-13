import {
  DARK_GRAY,
  DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK,
  DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT,
  DEFAULT_BACKGROUND_COLOR_DARK,
  DEFAULT_BACKGROUND_COLOR_LIGHT,
  DISABLED_COLOR,
  DIVIDER_COLOR_LIGHT,
  HINT_TEXT_DARK,
  HINT_TEXT_LIGHT,
  HOVER_COLOR,
  LIGHT_GREY,
  PRIMARY_TEXT_DARK,
  SECONDARY_DARK,
  SECONDARY_LIGHT,
  SECONDARY_TEXT_LIGHT,
  wHITE_COLOR
} from "./ConstantColors"

export const themeLightStyle = `
<style>
html , body{
  background-color: ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
}

.editorToolbar [class*="shadow-"]{
  background-color: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;
  background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;
}
.editorToolbar [class*="shadow-"] * {
  color: ${DARK_GRAY} !important;

}
.editorToolbar [class*="shadow-"] .btn-info:hover {
  color: ${HOVER_COLOR} !important;
}   
.editorToolbar [class*="thinArrow-"] {
  color: ${DARK_GRAY} !important;
} 
  #customized-dialog-editor , #dialog-content-editor .content-editor,#draggable-dialog-title  { 
    background: ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset !important;
    
  }
  
  .tools_editor{
    background-color: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;
    box-shadow: none !important;
  }
  #demo-controlled-open-Font-changer *{
    background-color:  ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
    color: ${SECONDARY_TEXT_LIGHT} !important,

  }
  .font-changer * {
    background-color:  ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
    color: ${SECONDARY_TEXT_LIGHT} !important,
  }

.sizeChanger * {
 
  background-color: transparent !important;
  border: "0.5px solid #c7c4c4a2" !important;
}

  fieldset{
    border: "0.5px solid #c7c4c4a2" !important;
  }
  .tools_editor * {
   color: ${HINT_TEXT_LIGHT} !important;
  }
  .title_editor, .popover-option *,#draggable-dialog-title * {
    color: ${SECONDARY_TEXT_LIGHT} !important;
    background-color: "#fff" !important;

  }

  .content-editor hr{
    border-color:${SECONDARY_LIGHT} !important;
  }
  hr{
    border-color:${SECONDARY_LIGHT} !important;
  }
  .popover-option {
    background-color: ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  #dialog-content-editor .tab-editor, #dialog-content-editor , .title-section-dialog {
    color: ${DARK_GRAY} !important;
  }
  .text{
    color: ${SECONDARY_TEXT_LIGHT} !important;
  }
  .MuiInputBase-root{
    color: ${SECONDARY_TEXT_LIGHT} !important;
    border-color:${HINT_TEXT_DARK} !important;
  }
  .dialog-editor .MuiDialog-paper .btn-info, .dialog-editor .MuiDialog-paper svg {
    color: ${DARK_GRAY} !important;
  }
  input{
    border-color: ${LIGHT_GREY} !important;
  }
  .margin-show{
    border-color: rgb(239, 235, 235) !important; 
  }

 #customized-dialog-editor{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset !important
  }
  .templateCard{
    
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px !important;
  }
  .templateCard : hover{
    
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px !important;
  }
  .dialog-setting-editor, #dialog-settings-content{
    background-color: ${DEFAULT_BACKGROUND_COLOR_LIGHT} !important;
  }
  .btn-info {
    color: ${DARK_GRAY} !important;
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;

  }
  .content-dialog-setting-editor , .toolbox, #dialog-content-editor{
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;
  }
  .customPaper {
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_LIGHT} !important;
    color: ${DARK_GRAY} !important;
  }

  </style>
`

export const themeDarkStyle = `
<style>
html{
  background-color: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
}
body{
    background-color: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
} 
.editorToolbar [class*="shadow-"]{
    background-color: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK} !important;
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK} !important;
}
.editorToolbar [class*="shadow-"] * {
  color: ${SECONDARY_LIGHT} !important;
 
}
.editorToolbar [class*="shadow-"] .btn-info:hover {
    color: ${HOVER_COLOR} !important;
  }   
  .editorToolbar [class*="thinArrow-"] {
    background-color: ${HINT_TEXT_LIGHT} !important;
  }  

  #customized-dialog-editor , #dialog-content-editor .content-editor, .tools_editor,#draggable-dialog-title  { 
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK} !important;
    
  }
  #customized-dialog-editor, #dialog-content-editor .content-editor, #draggable-dialog-title{
    box-shadow: none !important;
  }
  #demo-controlled-open-Font-changer *{
    background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
    color: ${wHITE_COLOR} !important,

  }
  #draggable-dialog-title ul * {
    background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
    color: ${wHITE_COLOR} !important,
  }

  .formControl::before {
    background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }
  .formControl {
    background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }
  .formControl::after {
    background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }

.sizeChanger * {
  // background-color:  ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  background-color: transparent !important;
  border: "0.5px solid #c7c4c4a2" !important;
}

  fieldset{
    border: "0.5px solid #c7c4c4a2" !important;
  }
  .tools_editor * {
   color: ${HINT_TEXT_LIGHT} !important;
  }
  .title_editor, .popover-option *,#draggable-dialog-title * {
    color: ${PRIMARY_TEXT_DARK} !important;

  }
  #dialog-content-editor{
    background: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }
  #dialog-content-editor .MuiInputBase-input[type="text"]{
    background: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }
  .content-editor hr{
    border-color:${HINT_TEXT_LIGHT} !important;
  }
  hr{
    border-color:${DARK_GRAY} !important;
  }
  .popover-option {
    background-color: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  #dialog-content-editor .tab-editor, #dialog-content-editor , .title-section-dialog {
    color: ${PRIMARY_TEXT_DARK} !important;
  }
  .text{
    color: ${HINT_TEXT_DARK} !important;
  }
  .MuiInputBase-root{
    color: ${HINT_TEXT_DARK} !important;
    border-color:${HINT_TEXT_DARK} !important;
    border: "0.5px solid #c7c4c4a2" !important;
  }
  .dialog-editor .MuiDialog-paper .btn-info, .dialog-editor .MuiDialog-paper svg {
    color: ${PRIMARY_TEXT_DARK} !important;
  }
  input{
    border-color: rgb(62, 62, 62) !important;
  }
  .margin-show{
    border-color: rgb(62, 62, 62) !important; 
  }
  .content-dialog-setting-editor, #dialog_title_editor {
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK} !important;
  }
  .tab-editor,  #dialog_title_editor *{
    color: ${PRIMARY_TEXT_DARK} !important;
  }
  .dialog-setting-editor, #dialog-settings-content{
    background-color: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
  }
  .btn-info {
    color: ${PRIMARY_TEXT_DARK} !important;
    background: ${DEFAULT_BACKGROUND_COLOR_CONTAINER_DARK} !important;

  }
  .customPaper {
    background-color: ${DEFAULT_BACKGROUND_COLOR_DARK} !important;
    color: ${PRIMARY_TEXT_DARK} !important;
  }

  </style> 
`
