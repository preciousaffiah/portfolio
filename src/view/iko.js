import React from "react";
import ikoAfrica from "../assets/ikoafrica.png";
import Header from "../components/header";
import Project from "../components/projects";

const Iko = () => {
  return (
    <div>
      <Header page="Iko Africa" link="/iko-africa" />
      <Project
        page="Iko Africa"
        description="social publishing app for african contnet writers"
        link="https://www.ikoafrica.com"
        year="2022"
        role="Backend"
        overview="Iko Africa is a social publishing app that is built to empower
                  african contnet writers by providing them with a unique
                  platform to reach a wide audience and monetize their work
                  effectively."
        image={ikoAfrica}
      />
    </div>
  );
};

export default Iko;
