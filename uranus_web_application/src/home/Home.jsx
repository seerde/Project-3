import React from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";
import SectionTypography from "../views/index-sections/SectionTypography.js";
import SectionJavaScript from "../views/index-sections/SectionJavaScript.js";

export default function Home(props) {
  return (
    <>
      {/* <IndexNavbar user={props.user} /> */}
      <IndexHeader />
      <div className="main">
        <SectionTypography />
        <SectionJavaScript {...props} filter={props.filter} />
        <DemoFooter />
      </div>
    </>
  );
}
