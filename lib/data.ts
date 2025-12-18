import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    name: "Projects",
    hash: "#projects",
  },
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
    title: "High School",
    location: "Himachal Pradesh,India",
    description:
      "I have completed my high school from DAV Shimla. My major was Non-medical.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "University Graduated",
    location: "Himachal Pradesh University,India",
    description:
      "I graduated in 2022 with a degree in Computer Science and explored a wide range of modern technologies, many of which are reflected in my project work.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Solan",
    description:
      "I worked as a Full-Stack Next.js Developer at Tunica Technologies for 1 year. My tech stack includes React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "TrendOra ",
    description:
"A modern and fast e-commerce platform designed for a seamless and enjoyable shopping journey. TrendOra delivers a Clean UI with a smooth user experience.",
   tags: ["Next.js", "ShadCn" ,"React"],
    imageUrl:"/image1.png",
    deployed:"https://trend-ora.vercel.app/",
  },
  {
    title: "Landing Pages",
    description:
      "A modern landing page designed with clarity and elegance, combining minimal visuals with a smooth user experience to create a polished and engaging interface.",
    tags: ["React", "Framer-Motion", "Three.js"],
    imageUrl:"/Apple.png",
    deployed:"https://apple-gold-eight.vercel.app/",
  },
  {
    title: "Kavix ",
    description:
"A modern investment insights platform with a clean UI, smooth animations, and a highly responsive user experience.",
   tags: ["Next.js", "ShadCn" ,"React", "Framer Motion"],
    imageUrl:"/kavix.png",
    deployed:"https://kavix-two.vercel.app/",
  },
  {
    title: "Obys Agency",
    description:
      "I worked as a Frontend Developer and built a modern, minimal interface inspired by Obys Agency, focusing on smooth animations, clean typography, and a premium layout.",
    tags: ["Nextjs" , "Three.js" , "GSAP"],
    imageUrl: "/frontend.png",
    deployed:"https://obys.agency/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "SCSS",
  "ShadCN",
  "Redux",
  "Framer Motion",
  "GSAP"
] as const;
