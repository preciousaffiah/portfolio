import React from "react";
import caseImg from "../assets/case.png";

const Header = ({ page, link }) => {
  return (
    <div className="flex gap-x-2 py-3 px-4 border-b-2 border-solid border-neutral-700">
      <span className="truncate">
        <a href="#" className="flex flex-row items-center gap-x-2 w-fit">
          <img src={caseImg} className="w-5" />
          <p className="text-base">PRECIOUS AFFIAH</p>
        </a>
      </span>
      <span className="flex truncate">
        {page ? <p className="pr-2 text-neutral-500">/</p> : <p></p>}
        <a href={link} className="flex flex-row items-center gap-x-2 w-fit">
          {page ? <img src={caseImg} className="w-5" /> : <p></p>}
          <p className="text-base">{page}</p>
        </a>
      </span>
    </div>
  );
};

export default Header;
