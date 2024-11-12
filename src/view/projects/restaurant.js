import React from "react";
import restaurant from "../../assets/projects/restaurant.jpg";
import Header from "../../components/header";
import Project from "../../components/project";

const Restaurant = () => {
  return (
    <div>
      <Header page="Restaurant Management" link="/projects/restaurant" />
      <Project
        page="Restaurant Management"
        description="Restaurant management website"
        link="/"
        year="2024"
        role="Frontend"
        overview="A restaurant website for viewing and managing orders, menus and employees profiles."
        image={restaurant}
      />
    </div>
  );
};

export default Restaurant;
