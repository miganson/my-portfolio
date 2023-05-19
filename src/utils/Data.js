import { FaReact, FaNode, FaAngular, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiExpress } from "react-icons/si";

import Project3 from "../assets/Project1.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Angular JS",
    icon: <FaAngular />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 4,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 5,
    tech: "Node.js",
    icon: <FaNode />,
  },
  {
    id: 5,
    tech: "Express.js",
    icon: <SiExpress />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "Under Construction",
    project_desc: "Still working on these",
    tech_stack: ["React JS", "Node JS"],
    project_img: Project3,
    project_url: "https://youtu.be/jwSBE1EIevA",
    reverse: false,
  },
];
