import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
