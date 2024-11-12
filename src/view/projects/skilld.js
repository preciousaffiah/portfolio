import React from "react";
import skildAfrica from "../../assets/projects/skild-africa.png";
import Header from "../../components/header";
import Project from "../../components/project";

const Skild = () => {
  return (
    <div>
      <Header page="Skild Africa" link="/projects/skild-africa" />
      <Project
        page="Skild Africa"
        description="An e-learning platform for teenagers and young ones"
        link="https://skilld-africa-core-r2rsfdmoj-mintyplex.vercel.app"
        year="2020"
        role="Frontend"
        overview="Skild Africa is an E-learning platform for teenagers and young ones aquire tech skills from web development to video editing and lots more."
        image={skildAfrica}
      />
    </div>
  );
};

export default Skild;