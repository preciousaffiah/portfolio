import React, { useRef } from "react";
import img from "../assets/image.jpeg";
import bagImg from "../assets/bag.png";
import systemImg from "../assets/systems.png";
import backendImg from "../assets/system.png";
import featureImg from "../assets/feature.png";
import folderImg from "../assets/folder.png";
import documentation from "../assets/doc.png";
import databaseImg from "../assets/database.png";
import devOpsImg from "../assets/cloud.png";
import codeImg from "../assets/code.png";
import skilldAfrica from "../assets/projects/skild-africa.png";
import liwu from "../assets/projects/liwu.png";
import ikoAfrica from "../assets/projects/ikoafrica.png";
import flenjo from "../assets/projects/flenjo.png";
import digiyo from "../assets/projects/digiyo.jpeg";
import digiyoLogo from "../assets/projects/logos/logo-digiyo2.png";
import mscaLogo from "../assets/projects/logos/logo-msca2.png";
import ikoLogo from "../assets/projects/logos/logo-iko2.png";
import logLogo from "../assets/projects/logos/logo-log2.png";
import skildLogo from "../assets/projects/logos/logo-skild2.png";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import "../App.css";
import PageAnimation from "../components/animation";

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
            <div className="md:flex flex-row justify-between items-center w-full gap-12 pb-12 border-b-2 border-solid border-neutral-700">
              <PageAnimation>
                <div className="md:w-[30rem]">
                  <h1 className="md:text-4xl text-3xl font-bold pb-9">
                    PRECIOUS AFFIAH
                  </h1>
                  <h1 className="md:text-2xl text-xl font-semibold pb-3">
                    Software Engineer
                  </h1>
                  <p className="md:pb-0 pb-12 text-base">
                    I'm a dedicated Software Engineer with a passion for
                    building robust and scalable software systems. With 5+ years
                    of experience in the industry, I've worked on variety of
                    projects, ranging from large-scale enterprise solutions to
                    innovative startup ventures. Ready to{" "}
                    <span className="text-xl font-semibold pb-3">Create</span>{" "}
                    and{" "}
                    <span className="text-xl font-semibold pb-3">Recreate</span>{" "}
                    with{" "}
                    <span className="text-xl font-semibold pb-3">Code</span>.
                  </p>
                </div>
              </PageAnimation>
              <div className="w-fit">
                <img
                  src={img}
                  alt="img"
                  className="md:w-52 w-full opacity-0 transition-opacity duration-300 delay-0"
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                />
              </div>
            </div>
          </div>
          <div className="section-2 w-full">
            <PageAnimation>
              <div className="flex md:flex-row flex-col py-12 border-b-2 md:gap-y-0 gap-y-8 border-solid border-neutral-700">
                <div className="w-1/2">
                  <h1 className="text-3xl font-bold pb-3">5+</h1>
                  <p>Years of Experience</p>
                </div>
                <div className="w-1/2">
                  <h1 className="text-3xl font-bold pb-3">30+</h1>
                  <p>Projects Completed</p>
                </div>
              </div>
            </PageAnimation>
          </div>
          <div className="section-3 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <PageAnimation>
                <h1 className="text-2xl font-bold pb-3">Skills</h1>
                <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                  <img src={bagImg} alt="img" className="w-5" />
                  <p className="text-base">Expertise</p>
                </span>
              </PageAnimation>
              <PageAnimation>
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
                    <img src={devOpsImg} alt="img" className="w-4" />
                    <p>DevOps</p>
                  </div>
                  <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                    <img src={codeImg} alt="img" className="w-4" />
                    <p>Frontend development</p>
                  </div>

                  <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                    <img src={backendImg} alt="img" className="w-4" />
                    <p>Backend development</p>
                  </div>
                  <div className="flex flex-row gap-x-1 bg-neutral-700 md:w-52 w-full p-3 rounded-md">
                    <img src={databaseImg} alt="img" className="w-4" />
                    <p>Database Management</p>
                  </div>
                </div>
              </PageAnimation>
            </div>
          </div>
          <div className="section-4 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <PageAnimation>
                <h1 className="text-2xl font-bold pb-3">Projects</h1>
                <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                  <img src={featureImg} alt="img" className="w-5" />
                  <p className="text-base">Featured</p>
                </span>
              </PageAnimation>

              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="bg-neutral-700">
                      <Link to="ikoafrica.com">
                        <img src={ikoAfrica} alt="img" className="w-full" />
                        <div className=" p-3">
                          <span className="flex gap-x-1">
                            <img src={folderImg} alt="img" className="w-5" />
                            <p>Iko Africa</p>
                          </span>
                          <p className="text-xs py-1">
                            Social publishing app for african writers
                          </p>
                        </div>
                      </Link>
                    </div>
                  </PageAnimation>
                </div>

                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="bg-neutral-700">
                      <Link to="tryflenjo.com">
                        <img
                          src={flenjo}
                          alt="img"
                          className="w-full h-40"
                        />
                        <div className=" p-3">
                          <span className="flex gap-x-1">
                            <img src={folderImg} alt="img" className="w-5" />
                            <p>Flenjo</p>
                          </span>
                          <p className="text-xs py-1">
                           A Saas system that helps businesses manage everything effortlessly.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </PageAnimation>
                </div>
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="bg-neutral-700">
                      <Link to="projects/liwu">
                        <img src={liwu} alt="img" className="w-full" />
                        <div className=" p-3">
                          <span className="flex gap-x-1">
                            <img src={folderImg} alt="img" className="w-5" />
                            <p>Liwu Airdrop</p>
                          </span>
                          <p className="text-xs py-1">
                           Liwu - The AI-Powered Gift Token for Gamers, Streamers and Social Connections Built on BNB.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </PageAnimation>
                </div>
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="bg-neutral-700">
                      <Link to="projects/digiyo">
                        <img src={digiyo} alt="img" className="w-full" />
                        <div className=" p-3">
                          <span className="flex gap-x-1">
                            <img src={folderImg} alt="img" className="w-5" />
                            <p>digiYO</p>
                          </span>
                          <p className="text-xs py-1">
                            A social sporting platform for athletes and like
                            minds
                          </p>
                        </div>
                      </Link>
                    </div>
                  </PageAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="section-3 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <PageAnimation>
                <h1 className="text-2xl font-bold pb-3">Work</h1>
                <span className="flex flex-row items-center pb-3 border-b-2 border-solid border-neutral-700">
                  <img src={bagImg} alt="img" className="w-5" />
                  <p className="text-base">Companies worked for</p>
                </span>
              </PageAnimation>
              <PageAnimation>
                <div className="flex-wrap w-full flex flex-row pt-12 text-sm justify-between">
                  <img
                    src={mscaLogo}
                    alt="img"
                    className="md:w-24 md:h-14 w-16 h-12"
                  />
                  <img src={ikoLogo} alt="img" className="md:size-14 size-12" />

                  <img
                    src={skildLogo}
                    alt="img"
                    className="md:w-24 md:h-12 w-16 h-10"
                  />
                  <img src={logLogo} alt="img" className="md:size-14 size-12" />
                  <img
                    src={digiyoLogo}
                    alt="img"
                    className="md:size-14 size-12"
                  />
                </div>
              </PageAnimation>
            </div>
          </div>
          <div className="section-5 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <h1 className="text-2xl font-bold pb-3">Education</h1>
              <div className="flex-wrap w-full gap-4 flex flex-row pt-3 text-sm justify-between">
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="text-base">
                      <p className="md:text-3xl text-2xl font-semibold pb-3">
                        Advanced Diploma in Software Engineering
                      </p>
                      <p>Aptech Computer Education</p>
                      <p>Nigeria, 2020-2021</p>
                    </div>
                  </PageAnimation>
                </div>
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="text-base">
                      <p className="md:text-3xl text-2xl font-semibold pb-3">
                        Bachelor of Science in Computer Science
                      </p>
                      <p>Middlesex University</p>
                      <p>Mauritius, 2021-2024</p>
                    </div>
                  </PageAnimation>
                </div>
                <div className="md:w-[48%] w-full">
                  <PageAnimation>
                    <div className="text-base">
                      <p className="md:text-3xl text-2xl font-semibold pb-3">
                        Fullstack Development
                      </p>
                      <p>Mississippi Coding Academies</p>
                      <p>USA, 2022-2023</p>
                    </div>
                  </PageAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="section-6 w-full">
            <div className="py-12 border-b-2 border-solid border-neutral-700">
              <PageAnimation>
                <Testimonial />
              </PageAnimation>
            </div>
          </div>
          <div className="section-7 w-full">
            <PageAnimation>
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
                            <Link
                              to={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.name}
                            </Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PageAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
