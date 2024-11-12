import React from "react";
import serialization from "../../assets/projects/Javascript_Serialization.png";
import Header from "../../components/header";
import Project from "../../components/project";

const SerializationJs = () => {
  return (
    <div>
      <Header page="Javascript Serialization" link="/projects/js-serialization" />
      <Project
        page="Javascript Serialization"
        description="This project implements custom serialization in Javascript"
        link="https://github.com/preciousaffiah/Javascript_Serialization"
        year="2024"
        role="Backend"
        overview="This project implements custom serialization in Javascript, It allows data to be stored with a unique file extension and encrypted, ensuring data security and integrity."
        image={serialization}
      />
    </div>
  );
};

export default SerializationJs;
