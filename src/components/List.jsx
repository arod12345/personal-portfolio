import React from "react";
import { FaReact } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaHardHat } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const List = () => {

    const techStack = {
        "React": <FaReact className="w-6 h-6" />,
        "NextJS": <RiNextjsLine className="w-6 h-6" />,
        "Tailwindcss": <RiTailwindCssFill className="w-6 h-6" />,
        "NodeJS": <FaNodeJs className="w-6 h-6" />,
        "ThreeJS": <TbBrandThreejs className="w-6 h-6" />,
        "Graphql": <GrGraphQl className="w-6 h-6" />,
        "Mongodb": <BiLogoMongodb className="w-6 h-6" />,
        "HTML": <FaHtml5 className="w-6 h-6" />,
        "Hardhat": <FaHardHat className="w-6 h-6" />,
        "Solidity": <SiSolidity className="w-6 h-6" />,
    }

    return (
        <div className="w-full relative sidebar sm:h-[276px] p-2 h-fit object-contain overflow-y-scroll">
            
            {Object.entries(techStack).map(([name, icon]) => (
                <div key={name} className="px-4 py-6 rounded-md h-4 text-white cursor-pointer bg-neutral-500/20 hover:bg-neutral-400/40 shadow-xl flex items-center my-4 w-full">
                    {icon}
                    <span className="ml-4 font-bold">
                        {name}
                    </span>
                </div>
            ))}            
        </div>
    )
}

export default List;