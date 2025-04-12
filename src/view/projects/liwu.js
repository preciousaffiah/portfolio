import React from "react";
import liwu from "../../assets/projects/liwu.png";
import Header from "../../components/header";
import Project from "../../components/project";

const Liwu = () => {
  return (
    <div>
      <Header page="Liwu Airdrop" link="/projects/liwu" />
      <Project
        page="Liwu Airdrop"
        description="LiWU Panda is a creative symbol of play, connection, and community in the blockchain space, inspired by the Chinese word for “gift” (禮), and represents a movement of generosity."
        link="https://airdrops.liwupanda.com"
        year="2024"
        role="Frontend"
        overview="Liwu - The AI-Powered Gift Token for Gamers, Streamers and Social Connections Built on BNB"
        image={liwu}
      />
    </div>
  );
};

export default Liwu;
