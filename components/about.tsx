"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        At <span className="underline">Bandcamp</span> as a{" "}
        <span className="font-bold">Software Engineer</span> since June 2023,
        I've collaborated closely with cross-functional teams, leveraging{" "}
        <span className="font-bold">
          Ruby, MySQL, Javascript and many more technologies
        </span>{" "}
        to enhance our product. Before this, I earned my{" "}
        <span className="font-bold">Computer Science</span> degree from{" "}
        <span className="underline">Florida International University</span>{" "}
        where I worked as a <span className="font-bold">Student Webmaster</span>{" "}
        designing and developing websites for the Knights Foundation School of
        Computing and Information Sciences from 2021 to 2023, ensuring mobile
        compatibility and meeting departmental needs.{" "}
        <span className="italic">My tech journey</span> began in 2018 with{" "}
        <span className="underline">AmeriCorps</span>, as an{" "}
        <span className="font-bold">ACES Tutor</span> mentoring high school
        students in subjects such as web development and Information Technology.
      </p>
    </motion.section>
  );
}
