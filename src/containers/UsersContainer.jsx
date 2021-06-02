import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UsersSection from "../components/UsersSection/UsersSection";

const UsersContainer = () => {
  return (
    <div className="container">
      <Navbar />
      <UsersSection />
      <Footer />
    </div>
  );
};

export default UsersContainer;
