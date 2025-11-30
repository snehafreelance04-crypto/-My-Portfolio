"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">

     <motion.div
  initial={{ rotate: 0 }}
  animate={{ rotate: [0, -8, 8, -8, 0] }}
  transition={{
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  }}
  className="flex justify-center mb-4"
>
  <FontAwesomeIcon
    icon={faFolderOpen}
    className="text-gray-700 dark:text-white"
    size="2x"
  />
</motion.div>

      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}