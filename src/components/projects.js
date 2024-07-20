import React from "react";
import caseImg from "../assets/case.png";
import folderImg from "../assets/folder.png";
import webImg from "../assets/web.png";
import roleImg from "../assets/role.png";
import yearImg from "../assets/year.png";

const Project = ({ page, description, link, year, role, overview, image }) => {
  return (
    <div>
      <div className="lg:px-80 px-[5%] md:pt-24 pt-6">
        <div className="md:flex flex-col justify-center items-center w-full md:px-0">
          <div className="section-1 w-full">
            <div>
              <img src={folderImg} className="w-20 pb-4" />
            </div>
            <div className="md:flex flex-row justify-between items-center w-full gap-12 pb-12 border-b-2 border-solid border-neutral-700">
              <div className="md:w-[40rem]">
                <h1 className="md:text-4xl text-3xl font-bold pb-9">{page}</h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex w-full gap-2">
                    <img src={caseImg} className="w-5 h-full" />
                    <p className="overflow-hidden truncate text-[0.98rem] w-[30%] text-neutral-500">
                      Short description
                    </p>
                    <p className="text-[0.98rem] w-[60%]">{description}</p>
                  </div>
                  <div className="flex w-full gap-2">
                    <img src={webImg} className="w-5 h-full" />
                    <p className="overflow-hidden truncate text-[0.98rem] w-[30%] text-neutral-500">
                      Website
                    </p>
                    <a href={link} target="_blank" className="w-[60%] underline">
                      <p className="overflow-hidden truncate text-[0.98rem] w-full">
                        {link}
                      </p>
                    </a>
                  </div>
                  <div className="flex w-full gap-2">
                    <img src={roleImg} className="w-5 h-full" />
                    <p className="overflow-hidden truncate text-[0.98rem] w-[30%] text-neutral-500">
                      Role / Service
                    </p>
                    <p className="text-xs w-fit bg-[#69314C] px-1 flex items-center">
                      {role}
                    </p>
                  </div>
                  <div className="flex w-full gap-2">
                    <img src={yearImg} className="w-5 h-full" />
                    <p className="overflow-hidden truncate text-[0.98rem] w-[30%] text-neutral-500">
                      Year
                    </p>
                    <p className="overflow-hidden truncate text-[0.98rem] w-[60%]">
                      {year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2 w-full">
            <div className="flex flex-col py-12 border-b-2 gap-y-8 border-solid border-neutral-700">
              <div className="w-full flex flex-col gap-y-3">
                <p className="text-sm w-fit bg-[#69314C] px-1 flex items-center">
                  PROJECT OVERVIEW
                </p>
                <h1 className="text-2xl font-bold">{page}</h1>
                <p>
                  {overview}
                </p>
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <p className="text-sm w-fit bg-[#69314C] px-1 flex items-center">
                  WEBSITE
                </p>
                <img src={image} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
