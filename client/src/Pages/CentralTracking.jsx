import React from "react";
import Navbar from "../components/Navbar";
import Tracking from "../components/Central/track";
import Footer from "../components/HomePage/Footer";

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Navbar />
      <main className="grow">
        <Tracking />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
