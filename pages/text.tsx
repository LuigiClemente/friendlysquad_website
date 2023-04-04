import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const DynamicPageLayer = dynamic(
  () => import("@/TextEditor/ExampleOfEditor2"),
  {
    ssr: false,
  }
);
const text = () => {
  return (
    <div className="h-30 w-30 relative">
      <DynamicPageLayer lang={"fr"} />
    </div>
  );
};

export default text;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["content"])),
    },
  };
}
