import React from "react";
import youchat from "../../assets/projects/youchat.png";
import Header from "../../components/header";
import Project from "../../components/project";

const YouChat = () => {
  return (
    <div>
      <Header page="YouChat" link="/projects/you-chat" />
      <Project
        page="YouChat - coming soon"
        description="A web chat application"
        link="/"
        year="2024"
        role="FullStack"
        overview="A web chat application for communicating with family and friends. Features include sending and sharing images, videos, voice notes and also voice calling"
        image={youchat}
      />
    </div>
  );
};

export default YouChat;
