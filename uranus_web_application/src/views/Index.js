import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";

function Index() {

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionTypography />
        <SectionJavaScript />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
