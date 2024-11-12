import React from "react";
import estate from "../../assets/projects/real-estate.png";
import Header from "../../components/header";
import Project from "../../components/project";

const RealEstate = () => {
  return (
    <div>
      <Header page="Real Estate" link="/projects/real-estate" />
      <Project
        page="Real Estate"
        description="A real estate website"
        link="https://real-estate001.vercel.app/"
        year="2022"
        role="Frontend"
        overview="A real estate website for agents and buyers to checkout and purchase their new homes and properties."
        image={estate}
      />
    </div>
  );
};

export default RealEstate;
