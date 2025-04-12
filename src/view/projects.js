import React from "react";
import featureImg from "../assets/feature.png";
import folderImg from "../assets/folder.png";
import skilldAfrica from "../assets/projects/skild-africa.png";
import ikoAfrica from "../assets/projects/ikoafrica.png";
import ticket from "../assets/projects/bus-ticketing.png";
import digiyo from "../assets/projects/digiyo.jpeg";
import wordhive from "../assets/projects/wordhive.png";
import realestate from "../assets/projects/real-estate.png";
import topshelf from "../assets/projects/topshelf.png";
import restaurant from "../assets/projects/restaurant.jpg";
import liwu from "../assets/projects/liwu.png";
import youchat from "../assets/projects/youchat.png";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Projects = () => {
  const items = [
    {
      link: "/projects/iko-africa",
      name: "Iko Africa",
      description: "social publishing app for african contnet writers",
      tag: "Backend",
      img: ikoAfrica,
    },
        {
      link: "/projects/liwu",
      name: "Liwu Airdrop",
      description: "LiWU Panda is a creative symbol of play, connection, and community in the blockchain space, inspired by the Chinese word for “gift” (禮), and represents a movement of generosity.",
      tag: "Frontend",
      img: liwu,
    },
         {
      link: "/projects/restaurant",
      name: "Restaurant Management",
      description: "Restaurant management website",
      tag: "Frontend",
      img: restaurant,
    },
    {
      link: "/projects/you-chat",
      name: "YouChat",
      description: "Web chat application",
      tag: "FullStack",
      img: youchat,
    },
    {
      link: "/projects/top-shelf",
      name: "Top Shelf",
      description: "An e-commerce website",
      tag: "FullStack",
      img: topshelf,
    },
    {
      link: "/projects/skild-africa",
      name: "Skild Africa",
      description: "An e-learning platform for teenagers and young ones",
      tag: "Frontend",
      img: skilldAfrica,
    },
    {
      link: "/projects/digiyo",
      name: "digiYO",
      description: "A social sporting platform for athletes and like minds",
      tag: "Backend",
      img: digiyo,
    },
    {
      link: "/projects/ticketing",
      name: "Bus Ticketing",
      description: "A bus ticketing platform",
      tag: "Backend",
      img: ticket,
    },
    {
      link: "/projects/word-hive",
      name: "Word Hive",
      description: "A simple word search game",
      tag: "Frontend",
      img: wordhive,
    },
    {
      link: "/projects/real-estate",
      name: "Real Estate",
      description: "A real estate website",
      tag: "Frontend",
      img: realestate,
    },
  ];
  return (
    <div>
      <Header />
      <div className="md:px-14 px-6">
        <div className="md:flex flex-col justify-center items-center w-full md:px-0">
          <div className="section-4 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <h1 className="text-2xl font-bold pb-3">Projects</h1>
              <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                <img src={featureImg} alt="img" className="w-5" />
                <p className="text-base">Featured</p>
              </span>
              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                {items.map((item) => (
                  <div className="bg-neutral-700 md:w-[25rem] w-full">
                    <Link to={item.link}>
                      <img src={item.img} alt="img" className="w-full" />
                      <div className=" p-3">
                        <span className="flex gap-x-1">
                          <img src={folderImg} alt="img" className="w-5" />
                          <p>{item.name}</p>
                        </span>
                        <p className="text-xs py-1">{item.description}</p>
                        <p className="text-xs w-fit bg-[#69314C] px-1">
                          {item.tag}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
