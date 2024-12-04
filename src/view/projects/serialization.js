import React from "react";
import serialization from "../../assets/projects/Javascript_Serialization.png";
import Header from "../../components/header";
import Project from "../../components/project";

const SerializationJs = () => {
  return (
    <div>
      <Header page="Javascript Serialization" link="/projects/js-serialization" />
      <Project
        page="digiYO"
        description="A social sporting platform for athletes and like minds"
        link="https://apps.apple.com/ng/app/digiyo/id6502759122"
        year="2024"
        role="Backend"
        overview="digiYO is a platform where users can book & schedule sports training sessions, create challenge competitions, share highlights, and monetize their content."
        image={serialization}
      />
    </div>
  );
};

export default SerializationJs;
