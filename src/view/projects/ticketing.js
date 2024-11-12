import React from "react";
import ticket from "../../assets/projects/bus-ticketing.png";
import Header from "../../components/header";
import Project from "../../components/project";

const Ticketing = () => {
  return (
    <div>
      <Header page="Bus Ticketing" link="/projects/ticketing" />
      <Project
        page="Bus Ticketing"
        description="A bus ticketing platform"
        link="https://github.com/preciousaffiah/bus-ticketing"
        year="2023"
        role="Backend"
        overview="A simple bus ticketing platform where users can fund their account to pay for tickets for bus rides and also transfer funds to other users account on the platform"
        image={ticket}
      />
    </div>
  );
};

export default Ticketing;
