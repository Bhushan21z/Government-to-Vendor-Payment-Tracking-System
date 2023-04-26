import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HomePage/HeroHome";
import FeaturesBlocks from "../components/HomePage/FeaturesBlocks";
import Footer from "../components/HomePage/Footer";

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <Navbar />
      <main className="grow">
        <HeroHome />
        <FeaturesBlocks />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
