"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// ⭐ Correct FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  const { ref } = useSectionInView("About");
  const youtubeVideoId = "CF6cgJnr57E?si=QoiSqhjbJ8v_cwqg";

  const getYouTubeVideoId = (url: string) => {
    if (!url) return youtubeVideoId;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : youtubeVideoId;
  };

  const videoId = getYouTubeVideoId(youtubeVideoId);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      {/* ⭐ ICON ADDED CORRECTLY HERE */}
     <motion.div
  initial={{ y: 2, opacity: 0.9 }}
  animate={{ y: -2, opacity: 1 }}
  transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 1.8,
    ease: "easeInOut",
  }}
  className="flex justify-center mb-4"
>
  <FontAwesomeIcon
    icon={faAddressCard}
    size="2x"
    className="text-gray-700 dark:text-white"
  />
</motion.div>


      <SectionHeading>About me</SectionHeading>

      <p className="mb-4 leading-relaxed">
        I completed my high school in <span className="font-medium">2018</span>{" "}
        and soon discovered my passion for programming. Since then, I’ve been
        learning and building modern web applications, focusing mainly on
        creating clean, interactive, and user-friendly interfaces. My core
        stack is <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.js</span>, and I also work with{" "}
        <span className="font-medium">TypeScript</span> and{" "}
        <span className="font-medium">Framer Motion</span>. I enjoy solving
        problems and continuously improving my skills. I’m currently looking for
        a <span className="font-medium">full-time developer role</span>.
      </p>

      <p className="leading-relaxed ">
        <span className="italic">When I’m not coding</span>, I love watching
        movies, listening to music, and exploring creative hobbies like art and
        craft. I enjoy learning new concepts and keeping myself updated with{" "}
        <span className="font-medium">modern frontend technologies</span>.
      </p>
    </motion.section>
  );
}
