"use client";

import Link from "next/link";

import Tooltip from "../atoms/Tooltip";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="wrapper">
      <hr className="h-[1px] border-none w-full mb-6 md:mb-8 bg-elevation_one" />
      <div className="pb-[2.4rem] flex flex-col justify-between items-center md:flex-row">
        <Socials />
        <h6 className="text-center leading-10 mt-0 font-jetbrains">
          Made by Yogesh. &#60;3
          <Tooltip tip="you're here">
            <span className="rounded-[7px] py-[0.15rem] px-[0.5rem] w-fit ml-4 mr-[0.4rem] font-jetbrains bg-elevation_one">
              V2
            </span>
          </Tooltip>
          <Tooltip tip="how to delete">
            <Link
              className="transition-[0.3s_var(--bezier-one)] no-underline font-[0.9rem] rounded-[7px] py-[0.15rem] px-[0.5rem] hover:font-[400] hover:w-fit text-tex font-jetbrains hover:text-elevation_one hover:bg-accent offset_ring"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              V1
            </Link>
          </Tooltip>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
