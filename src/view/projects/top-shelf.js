import React from "react";
import topshelf from "../../assets/projects/topshelf.png";
import Header from "../../components/header";
import Project from "../../components/project";

const TopShelf = () => {
  return (
    <div>
      <Header page="Top Shelf" link="/projects/top-shelf" />
      <Project
        page="Top Shelf"
        description="An e-commerce website"
        link="https://weed-e-commerce-frontend.vercel.app"
        year="2023"
        role="FullStack"
        overview="This is an e-commerece website for users to buy weed and best weed products in Canada. This project was made using ReactJs, NodeJs, ExpressJs and MongoDB"
        image={topshelf}
      />
    </div>
  );
};

export default TopShelf;
