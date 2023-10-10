import React from "react";
import { FaBandcamp, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
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

export const skillsData = [
  "HTML",
  "Liquid",
  "CSS",
  "SCSS",
  "JavaScript",
  "Ruby",
  "Minitest",
  "Java",
  "mySQL",
  "Software Testing",
  "Git"
] as const;