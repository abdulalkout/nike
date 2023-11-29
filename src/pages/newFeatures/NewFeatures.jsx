import React from "react";
import SidePanel from "../../components/SidePanel";
import MainPage from "../../components/MainPage";
import Nav from "../../components/nav/Nav";
import NavExtension from "../../components/navExtension/NavExtension";
import Footer from "../../components/footer/Footer";

function NewFeatures() {
  return (
    <div>
      <Nav />
      <NavExtension />
      <div className="fullpagediv">
        <SidePanel />
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default NewFeatures;
