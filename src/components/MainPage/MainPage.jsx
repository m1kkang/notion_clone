import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "../../index.css";

function MainPage() {
  return (
    <div className="container flex flex-col w-full h-full ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;
