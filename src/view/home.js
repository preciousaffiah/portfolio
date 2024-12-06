import React from "react";
import img from "../assets/image.jpeg";
import caseImg from "../assets/case.png";
import bagImg from "../assets/bag.png";
import systemImg from "../assets/system.png";
import communicateImg from "../assets/communicate.png";
import teamImg from "../assets/team.png";
import timeImg from "../assets/time.png";
import lightImg from "../assets/light.png";
import personImg from "../assets/person.png";
import featureImg from "../assets/feature.png";
import folderImg from "../assets/folder.png";
import mailImg from "../assets/mail.png";
import webImg from "../assets/web.png";
import documentation from "../assets/doc.png";
import locationImg from "../assets/location.png";
import skilldAfrica from "../assets/projects/skild-africa.png";
import ikoAfrica from "../assets/projects/ikoafrica.png";
import restaurant from "../assets/projects/restaurant.jpg";
import digiyo from "../assets/projects/digiyo.jpeg";
import Header from "../components/header";
import { Link } from "react-router-dom";

import "../App.css";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const HomePage = () => {
  const items = [
    {
      link: "https://www.linkedin.com/in/precious-affiah",
      name: "LinkedIn",
    },
    {
      link: "https://github.com/preciousaffiah",
      name: "Github",
    },
    {
      link: "https://www.instagram.com/preciousaffiah",
      name: "Instagram",
    },
  ];
  return (
    <div>
      <Header />
      <div className="lg:px-80 px-[5%] md:pt-24 pt-6">
        <div className="md:flex flex-col justify-center items-center w-full md:px-0">
          <div className="section-1 w-full">
            {/* <div>
              <img src={caseImg} alt="img" className="w-20 pb-4" />
            </div> */}
            <div className="md:flex flex-row justify-between items-center w-full gap-12 pb-12 border-b-2 border-solid border-neutral-700">
              <div className="md:w-[30rem]">
                <h1 className="md:text-4xl text-3xl font-bold pb-9">
                  PRECIOUS AFFIAH
                </h1>
                <h1 className="md:text-2xl text-xl font-semibold pb-3">
                  Software Engineer
                </h1>
                <p className="md:pb-0 pb-12 text-base">
                  I'm a dedicated Software Engineer with a passion for building
                  robust and scalable software systems. With 4+ years of
                  experience in the industry, I've worked on variety of
                  projects, ranging from large-scale enterprise solutions to
                  innovative startup ventures. Ready to{" "}
                  <span className="text-xl font-semibold pb-3">create</span> and <span className="text-xl font-semibold pb-3">
                    recreate
                  </span>{" "}
                  with <span className="text-xl font-semibold pb-3">code</span>.
                </p>
              </div>
              <div className="w-fit">
                <img src={img} alt="img" className="md:w-52 w-full" />
              </div>
            </div>
          </div>
          <div className="section-2 w-full">
            <div className="flex md:flex-row flex-col py-12 border-b-2 md:gap-y-0 gap-y-8 border-solid border-neutral-700">
              <div className="w-1/2">
                <h1 className="text-3xl font-bold pb-3">4+</h1>
                <p>Years of Experience</p>
              </div>
              <div className="w-1/2">
                <h1 className="text-3xl font-bold pb-3">30+</h1>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="section-3 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <h1 className="text-2xl font-bold pb-3">Skills</h1>
              <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                <img src={bagImg} alt="img" className="w-5" />
                <p className="text-base">Expertise</p>
              </span>
              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={systemImg} alt="img" className="w-4" />
                  <p>Systems Design</p>
                </div>
                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={documentation} alt="img" className="w-4" />
                  <p>Technical Documentation</p>
                </div>
                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={lightImg} alt="img" className="w-4" />
                  <p>DevOps</p>
                </div>
                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={teamImg} alt="img" className="w-4" />
                  <p>Frontend development</p>
                </div>

                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={communicateImg} alt="img" className="w-4" />
                  <p>Backend development</p>
                </div>
                <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                  <img src={timeImg} alt="img" className="w-4" />
                  <p>Database Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-4 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <h1 className="text-2xl font-bold pb-3">Projects</h1>
              <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                <img src={featureImg} alt="img" className="w-5" />
                <p className="text-base">Featured</p>
              </span>
              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                <div className="bg-neutral-700 md:w-[48%] w-full">
                  <Link to="projects/iko-africa">
                    <img src={ikoAfrica} alt="img" className="w-full" />
                    <div className=" p-3">
                      <span className="flex gap-x-1">
                        <img src={folderImg} alt="img" className="w-5" />
                        <p>Iko Africa</p>
                      </span>
                      <p className="text-xs py-1">
                        Social publishing app for african writers
                      </p>
                      <p className="text-xs w-fit bg-[#69314C] px-1">Backend</p>
                    </div>
                  </Link>
                </div>

                <div className="bg-neutral-700 md:w-[48%] w-full">
                  <Link to="projects/restaurant">
                    <img src={restaurant} alt="img" className="w-full h-40" />
                    <div className=" p-3">
                      <span className="flex gap-x-1">
                        <img src={folderImg} alt="img" className="w-5" />
                        <p>Restaurant Management</p>
                      </span>
                      <p className="text-xs py-1">
                        Restaurant management website
                      </p>
                      <p className="text-xs w-fit bg-[#89632A] px-1">
                        Frontend
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="bg-neutral-700 md:w-[48%] w-full">
                  <Link to="projects/skild-africa">
                    <img src={skilldAfrica} alt="img" className="w-full" />
                    <div className=" p-3">
                      <span className="flex gap-x-1">
                        <img src={folderImg} alt="img" className="w-5" />
                        <p>Skild Africa</p>
                      </span>
                      <p className="text-xs py-1">
                        An e-learning platform for teenagers and young ones
                      </p>
                      <p className="text-xs w-fit bg-[#89632A] px-1">
                        Frontend
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="bg-neutral-700 md:w-[48%] w-full">
                  <Link to="projects/digiyo">
                    <img src={digiyo} alt="img" className="w-full" />
                    <div className=" p-3">
                      <span className="flex gap-x-1">
                        <img src={folderImg} alt="img" className="w-5" />
                        <p>digiYO</p>
                      </span>
                      <p className="text-xs py-1">
                        A social sporting platform for athletes and like minds
                      </p>
                      <p className="text-xs w-fit bg-[#69314C] px-1">Backend</p>
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="/projects">
                <div className="flex pt-5 justify-center font-semibold">
                  <p>see more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="section-5 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <h1 className="text-2xl font-bold pb-3">Education</h1>
              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                <div className="md:w-[48%] w-full">
                  <div className="text-base">
                    <p className="md:text-3xl text-2xl font-semibold pb-3">
                      Advanced Diploma in Software Engineering
                    </p>
                    <p>Aptech Computer Education</p>
                    <p>Nigeria, 2020-2021</p>
                  </div>
                </div>
                <div className="md:w-[48%] w-full">
                  <div className="text-base">
                    <p className="md:text-3xl text-2xl font-semibold pb-3">
                      Bachelor of Science in Computer Science
                    </p>
                    <p>Middlesex University</p>
                    <p>Mauritius, 2021-2024</p>
                  </div>
                </div>
                <div className="md:w-[48%] w-full">
                  <div className="text-base">
                    <p className="md:text-3xl text-2xl font-semibold pb-3">
                      Fullstack Development
                    </p>
                    <p>Mississippi Coding Academies</p>
                    <p>USA, 2022-2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-6 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <Testimonial />
            </div>
          </div>
          <div className="section-7 w-full">
            <div className="py-12">
              <h1 className="text-2xl font-bold pb-3">
                Ready to build something exceptional?
              </h1>
              <div className="flex-wrap w-full gap-4 flex flex-col pt-3 text-base justify-between">
                <div className="w-full flex gap-x-2 items-center">
                  <p className="font-medium text-lg">Contact me :</p>
                  <p className="bg-neutral-700 transition delay-100 hover:bg-neutral-800 py-1 px-3 rounded-xl">
                    <Link to="mailto:preciousaffiah205@gmail.com">
                      preciousaffiah205@gmail.com
                    </Link>
                  </p>
                </div>
                <div className="w-full flex gap-x-2 items-center">
                  <p className="font-medium text-lg">Follow me :</p>
                  {items.map((item, index) => (
                    <div key={index}>
                      <div className="flex  items-center">
                        <p className="bg-neutral-700 transition delay-100 hover:bg-neutral-800 py-1 px-3 rounded-xl">
                          <Link to={item.link} target="_blank" rel="noreferrer">
                            {item.name}
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
