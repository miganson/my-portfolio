import { FaReact, FaNode, FaAngular, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiExpress } from "react-icons/si";

import UnderConstruction from "../assets/Under-Construction.jpg";
import WeatherForecast from "../assets/Weather-Forecast.png";


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
    project_name: "Weather Forecast App",
    project_desc: `The Weather Forecast App is a user-friendly web application that provides personalized weather forecasts for any city. It utilizes OAuth 2.0 via Auth0 to securely authenticate users with their GitHub accounts. Once logged in, users enter a city name and the application employs the OpenWeatherMap API to fetch real-time weather data. Comprehensive error handling for invalid city inputs and network disruptions ensures a seamless user experience. Additionally, a dynamic cloud icon, that changes based on the city weather condition. The app combines efficient functionality with aesthetic design in a concise package.`,
    tech_stack: ["React JS", "Node JS", "Auth0 React"],
    project_img: WeatherForecast,
    project_url: "https://weather-forecast-app-m.netlify.app",
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
