import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

const HamburgerMenuIcon = createSvgIcon(
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
      <path
        d="M22.49,10.47c0,0.14-0.05,0.25-0.14,0.35s-0.21,0.14-0.35,0.14H9c-0.14,0-0.25-0.05-0.35-0.14
                    s-0.14-0.21-0.14-0.35s0.05-0.25,0.14-0.35S8.86,9.98,9,9.98h13c0.14,0,0.25,0.05,0.35,0.14S22.49,10.33,22.49,10.47z M22.49,15.47
                    c0,0.14-0.05,0.25-0.14,0.35s-0.21,0.14-0.35,0.14H9c-0.14,0-0.25-0.05-0.35-0.14s-0.14-0.21-0.14-0.35s0.05-0.25,0.14-0.35
                    S8.86,14.98,9,14.98h13c0.14,0,0.25,0.05,0.35,0.14S22.49,15.33,22.49,15.47z M22.49,20.47c0,0.14-0.05,0.25-0.14,0.35
                    s-0.21,0.14-0.35,0.14H9c-0.14,0-0.25-0.05-0.35-0.14s-0.14-0.21-0.14-0.35s0.05-0.25,0.14-0.35S8.86,19.98,9,19.98h13
                    c0.14,0,0.25,0.05,0.35,0.14S22.49,20.33,22.49,20.47z"
      ></path>
    </g>
  </>,
  "HamburgerMenuIcon"
);

export default HamburgerMenuIcon;
