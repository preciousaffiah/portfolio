import React from "react";
import wordhive from "../../assets/projects/wordhive.png";
import Header from "../../components/header";
import Project from "../../components/project";

const Word = () => {
  return (
    <div>
      <Header page="Word Hive" link="/projects/word-hive" />
      <Project
        page="Word Hive"
        description="A simple word search game"
        link="https://word-hive-project.vercel.app"
        year="2022"
        role="Frontend"
        overview="Welcome to WordSpell, a fun and challenging word game where you have to spell out a random word using tiles before the timer runs out! This project is built with HTML, CSS, and JavaScript."
        image={wordhive}
      />
    </div>
  );
};

export default Word;
