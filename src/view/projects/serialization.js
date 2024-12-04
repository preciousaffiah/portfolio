import React from "react";
import digiyo from "../../assets/projects/digiyoimg.jpeg";
import Header from "../../components/header";
import Project from "../../components/project";

const SerializationJs = () => {
  return (
    <div>
      <Header page="digiYO" link="/projects/digiyo" />
      <Project
        page="digiYO"
        description="A social sporting platform for athletes and like minds"
        link="https://apps.apple.com/ng/app/digiyo/id6502759122"
        year="2023"
        role="Backend"
        overview="digiYO is a platform where users can book & schedule sports training sessions, create challenge competitions, share highlights, and monetize their content."
        image={digiyo}
      />
    </div>
  );
};

export default SerializationJs;
