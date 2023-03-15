import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

const ThreeDotMenu = createSvgIcon(
  <>
    <rect width="24" height="24" fillOpacity="0" />
    <rect width="20" height="20" fillOpacity="0" transform="translate(2 2)" />
    <rect
      width="20"
      height="20"
      fill="black"
      fillOpacity="0"
      transform="translate(2 2)"
    />
    <g className="icons-default-fill">
      <circle className="icons-filled" cx="22" cy="16" r="2"></circle>
      <circle className="icons-filled" cx="16" cy="16" r="2"></circle>
      <circle className="icons-filled" cx="10" cy="16" r="2"></circle>
      <circle className="icons-unfilled" cx="22" cy="16" r="1.5"></circle>
      <circle className="icons-unfilled" cx="16" cy="16" r="1.5"></circle>
      <circle className="icons-unfilled" cx="10" cy="16" r="1.5"></circle>
    </g>
  </>,
  "ThreeDotMenu"
);

export default ThreeDotMenu;
