import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardSelection from "../components/CardSelection/CardSelection";
import Footer from "../components/Footer/Footer";

const HomeContainer = () => {
  return (
    <div className="container">
      <Navbar />
      <CardSelection />
      <Footer />
    </div>
  );
};

export default HomeContainer;
