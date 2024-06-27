import React from "react";
import { FaBandcamp, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import IpAddressChecker from "@/public/IP Address Checker.jpeg";
import MiamiHeatProject from "@/public/The Miami Heat Project.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Americorps ACES Tutor",
    location: "Miami, FL",
    description:
      "I served as an Americorps tutor at a local high school, where I mentored students in IT and Web Dev.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2018",
  },
  {
    title: "Student Webmaster Intern",
    location: "Miami, FL",
    description:
      "I worked as a Student Webmaster Intern at FIU. I designed and developed websited for KFSCIS.",
    icon: React.createElement(FaLaptopCode),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      "I interned at Bandcamp as a software engineer where I worked on a full stack project that involved Ruby, SQL, Javascript, and HTML/CSS.",
    icon: React.createElement(FaBandcamp),
    date: "2022",
  },
  {
    title: "Graduated from Florida International University",
    location: "Miami, FL",
    description:
      "I graduated from FIU where I earned a degree in computer science, and worked as a full time software engineer shortly after.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Software Engineer",
    location: "Remote",
    description:
      "After College, I was offered a full time position as a software engineer at Bandcamp, there I did full stack work for their web application on the vinyl team. ",
    icon: React.createElement(FaBandcamp),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "IpAddress & Domain Checker",
    description:
      "A simple web application that allows you to check the IP address and domain of a website.",
    tags: ["React.js", "Vite", "Tailwind", "Typescript"],
    link: "https://ip-address-checker-iota.vercel.app/",
    imageUrl: IpAddressChecker,
  },
  {
    title: "Miami Heat Streamlit Project",
    description:
      "A Streamlit project that uses the NBA API to display Miami Heat stats.",
    tags: ["Python", "Streamlit", "Pandas", "Altair"],
    link: "https://miamiheatproject-app.streamlit.app/",
    imageUrl: MiamiHeatProject,
  },
] as const;

export const skillsData = [
  "HTML",
  "Liquid",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "Minitest",
  "Java",
  "MySQL",
  "Software Testing",
  "Git",
  "Python",
  "React.js",
  "Node.js",
] as const;
