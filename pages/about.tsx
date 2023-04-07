import { CssBaseline, Skeleton } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const DynamicPageLayer = dynamic(() => import("@/PageLayer/PageLayer"), {
  ssr: false,
});

const DynamicFoodComponent = dynamic(
  () => import("@/SiteComponents/iframeFood/IframeFood"),
  {
    loading: () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Skeleton
          style={{
            padding: "10px",
            width: "80%",
            height: "100px",
            margin: "50px",
            marginTop: "100px",
          }}
          animation="wave"
        />
      </div>
    ),
    ssr: false,
  }
);

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DynamicPageLayer currentMenu="about">
        <DynamicFoodComponent />
      </DynamicPageLayer>
    </React.Fragment>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "about"])),
    },
  };
}
