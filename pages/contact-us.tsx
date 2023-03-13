
// const DynamicIframeLaser = dynamic(() => import('../components/iframeLaser/IframeLaser'), {
//   loading: () => <Spinner />,

import IframeLaser from "@/SiteComponents/iframeLaser/IframeLaser";
import Layout from "@/siteComponents/layout/Layout";

export default function Page() {
  return (
    <Layout>
      {/* <DynamicIframeLaser /> */}
      <IframeLaser />
    </Layout>
  )
}
