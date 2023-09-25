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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I studied Computer Science, have experience in Unity/C# and Computer Graphics (C++, OpenGL, glm, assimp, Dear ImGui), and in Object Detection and Segmentation with Deep Learning (python, detectron2, pytorch). I program mainly in C++, C# and Python. I like Competitive Programming (Data Structures and Algorithms), Computer Graphics and Deep Learning. I have developed small projects with Unity and Unreal Engine 5. Responsible, hard-worker, creative and project oriented. More than 2 years of experience in research and publishing papers.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and meditating. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">computer graphics and mathematics</span>. I'm also
        learning how to design video games.
      </p>
    </motion.section>
  );
}
