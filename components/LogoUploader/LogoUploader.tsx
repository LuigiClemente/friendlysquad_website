import { useAppProvider } from "@appProvider/AppProvider";
import axios from "axios";
import React, { useRef, useState } from "react";
import LogoOptionsUi from "../CustomPopover/LogoOptionsUi";

const LogoUploader = () => {
  const {
    borderBottomColorLogo,
    borderBottomWidthLogo,
    borderTopColorLogo,
    borderTopWidthLogo,
    borderLeftColorLogo,
    borderLeftWidthLogo,
    borderRightColorLogo,
    borderRightWidthLogo,
    // border style
    borderRightStyleLogo,
    borderLeftStyleLogo,
    borderTopStyleLogo,
    borderBottomStyleLogo,
    // border radius
    borderTopRightRadiusLogo,
    borderTopLeftRadiusLogo,
    borderBottomRightRadiusLogo,
    borderBottomLeftRadiusLogo,
    // padding
    paddingTopLogo,
    paddingBottomLogo,
    paddingLeftLogo,
    paddingRightLogo,
    // margin
    marginTopLogo,
    marginBottomLogo,
    marginLeftLogo,
    marginRightLogo,
    // logo hight and width
    minWidthLogo,
    maxWidthLogo,
    // readonly
    isReadOnly,
  }: any = useAppProvider();
  const [image, setImage] = useState("");
  const inputRef: any = useRef(null);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      console.log(
        "(URL.createObjectURL(e.target.files[0]))",
        URL.createObjectURL(e.target.files[0])
      );
      setImage(URL.createObjectURL(e.target.files[0]));
      var filename = e.target.files[0].name;
      var type = e.target.files[0].type;
      let last_dot = filename.lastIndexOf(".");
      let ext = filename.slice(last_dot + 1);
      uploadToServer(e.target.files[0], filename, type, ext);
    }
  };

  const uploadToServer = async (
    blob: Blob,
    filename: any,
    type: any,
    ext: any
  ) => {
    inputRef.current.click();
    console.log("uploadToServer");
    const body = new FormData();
    body.append("path", window.URL.createObjectURL(blob));
    body.append("image", blob);
    body.append("filename", "logo");
    body.append("type", type);
    body.append("ext", ext);
    await axios
      .post(`/api/imagMove`, body, {
        headers: { "Content-type": type },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("upload successfully !");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(`HTTP 400 error occured for third request`);
        }
        if (error.response.data) {
          console.log("errors ====>", error.response.data);
        }
      });
  };

  const handleImageUpload = () => {
    inputRef.current.click();
  };
  const [styleLogo, setStyleLogo] = React.useState({ display: "none" });
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        setStyleLogo({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyleLogo({ display: "none" });
      }}
    >
      {isReadOnly ? null : <LogoOptionsUi style={styleLogo} />}
      {!image ? (
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <img
            src={image ? image : "/images/logo.png"}
            alt="image"
            className="overflow-hidden"
            onClick={handleImageUpload}
            style={{
              position: "relative",
              borderBottomColor: borderBottomColorLogo,
              borderBottomWidth: `${borderBottomWidthLogo}px`,
              borderTopColor: borderTopColorLogo,
              borderTopWidth: `${borderTopWidthLogo}px`,
              borderLeftColor: borderLeftColorLogo,
              borderLeftWidth: `${borderLeftWidthLogo}px`,
              borderRightColor: borderRightColorLogo,
              borderRightWidth: `${borderRightWidthLogo}px`,
              borderRightStyle: borderRightStyleLogo,
              borderLeftStyle: borderLeftStyleLogo,
              borderTopStyle: borderTopStyleLogo,
              borderBottomStyle: borderBottomStyleLogo,
              borderTopRightRadius: `${borderTopRightRadiusLogo}px`,
              borderTopLeftRadius: `${borderTopLeftRadiusLogo}px`,
              borderBottomRightRadius: `${borderBottomRightRadiusLogo}px`,
              borderBottomLeftRadius: `${borderBottomLeftRadiusLogo}px`,
              paddingTop: `${paddingTopLogo}px`,
              paddingBottom: `${paddingBottomLogo}px`,
              paddingLeft: `${paddingLeftLogo}px`,
              paddingRight: `${paddingRightLogo}px`,
              marginTop: `${marginTopLogo}px`,
              marginBottom: `${marginBottomLogo}px`,
              marginLeft: `${marginLeftLogo}px`,
              marginRight: `${marginRightLogo}px`,
              objectFit: "cover",
              minWidth: `${minWidthLogo}px`,
              maxWidth: `${maxWidthLogo}px`,
              height: "auto",
            }}
          />
          <input
            type="file"
            onChange={handleImageChange}
            hidden
            ref={inputRef}
          />
        </div>
      ) : (
        <div className="dropzone">
          <a
            id="pictureSource"
            href="#"
            role="button"
            className="dropzone-showbox"
            aria-label="Picture source"
            aria-expanded="true"
            onClick={handleImageUpload}
            style={{
              borderBottomColor: borderBottomColorLogo,
              borderBottomWidth: `${borderBottomWidthLogo}px`,
              borderTopColor: borderTopColorLogo,
              borderTopWidth: `${borderTopWidthLogo}px`,
              borderLeftColor: borderLeftColorLogo,
              borderLeftWidth: `${borderLeftWidthLogo}px`,
              borderRightColor: borderRightColorLogo,
              borderRightWidth: `${borderRightWidthLogo}px`,
              borderRightStyle: borderRightStyleLogo,
              borderLeftStyle: borderLeftStyleLogo,
              borderTopStyle: borderTopStyleLogo,
              borderBottomStyle: borderBottomStyleLogo,
              borderTopRightRadius: `${borderTopRightRadiusLogo}px`,
              borderTopLeftRadius: `${borderTopLeftRadiusLogo}px`,
              borderBottomRightRadius: `${borderBottomRightRadiusLogo}px`,
              borderBottomLeftRadius: `${borderBottomLeftRadiusLogo}px`,
              paddingTop: `${paddingTopLogo}px`,
              paddingBottom: `${paddingBottomLogo}px`,
              paddingLeft: `${paddingLeftLogo}px`,
              paddingRight: `${paddingRightLogo}px`,
              marginTop: `${marginTopLogo}px`,
              marginBottom: `${marginBottomLogo}px`,
              marginLeft: `${marginLeftLogo}px`,
              marginRight: `${marginRightLogo}px`,
              minWidth: `${minWidthLogo}px`,
              maxWidth: `${maxWidthLogo}px`,
              height: "auto",
            }}
          >
            <div aria-hidden="true"></div>
          </a>
          <input
            type="file"
            onChange={handleImageChange}
            hidden
            ref={inputRef}
          />
        </div>
      )}
    </div>
  );
};
export default LogoUploader;
