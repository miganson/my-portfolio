import { FaReact, FaNode, FaAngular, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiExpress } from "react-icons/si";

import UnderConstruction from "../assets/Under-Construction.jpg";

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
    project_img: UnderConstruction,
    project_url: "https://youtu.be/jwSBE1EIevA",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Under Construction",
    project_desc: "Still working on these",
    tech_stack: ["React JS", "Node JS"],
    project_img: UnderConstruction,
    project_url: "https://youtu.be/jwSBE1EIevA",
    reverse: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "My Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "My Projects",
    href: "Projects",
  },
  {
    id: 3,
    name: "My Contact",
    href: "Contact",
  },
];
