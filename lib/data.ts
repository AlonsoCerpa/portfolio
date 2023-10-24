import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import neonEngineGif1 from "@/public/aux1.gif";
import neonEngineGif2 from "@/public/neon_engine_gif2.gif";
import neonEngineImage1 from "@/public/neon_engine_image1.png";
import neonEngineImage2 from "@/public/neon_engine_image2.png";
import unityVideoGame1Img1 from "@/public/unity_vg1_img1.png";
import unityVideoGame1Img2 from "@/public/unity_vg1_img2.png";
import unityVideoGame1Img3 from "@/public/unity_vg1_img3.png";
import unrealVideoGame1Img1 from "@/public/unreal_vg1_img1.png";
import unrealVideoGame1Img2 from "@/public/unreal_vg1_img2.png";
import unrealVideoGame1Img3 from "@/public/unreal_vg1_img3.png";
import metacerv from "@/public/metacerv.jpg";
import gitoc from "@/public/gitoc.jpg";
import prociencia from "@/public/prociencia.jpg";

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
    title: "Software Engineer",
    company: "(GI-TOC) Global Initiative against Transnational Organized Crime",
    description:
      "I was hired by a fellow of the Resilience Fund Fellowship 2021 program to research, design, implement and document an Android/Web application for collecting geographic points on a map where crimes occurred in Peru.",
    icon: gitoc,
    date: "May 2021 - Dec 2021",
  },
  {
    title: "Researcher",
    company: "Prociencia Peru",
    description:
      "I worked as a researcher thanks to the CONCYTEC – WORLD BANK Project Improvement and Expansion of the Services of the National System of Science Technology and Technological Innovation in Peru.",
    icon: prociencia,
    date: "June 2020 - June 2022",
  },
  {
    title: "Unity 3D Developer",
    company: "MetaCERV",
    description:
      "I developed 3D experiences using the game engine Unity to create digital twins of mining corporations. I programmed the functionality of digital twins using the C# programming language.",
    icon: metacerv,
    date: "June 2023 - July 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Neon Engine",
    description:
      "Neon Engine is a 3D Graphics Engine that I implemented in C++ from scratch using OpenGL, glm, ImGui and Assimp. With Neon Engine you can upload 3D models with PBR (Physically Based Rendering) textures and skeletal animations; perform transformations to the models; add point lights, spot lights and directional lights with bloom; upload an HDRI map to do Image Based Lighting with PBR; upload PBR materials and change the materials of the models in real time.",
    tags: ["C++", "OpenGL", "glm", "ImGui", "Assimp"],
    imageUrl: [neonEngineGif1, neonEngineImage1, neonEngineImage2],
    sourceCodeLink: "https://github.com/AlonsoCerpa/NeonEngine",
    youtubeLink: "https://youtu.be/rJXNfAThIbU?si=Zp-SbpgstTTHIxRT",
    playLink: "",
  },
  {
    title: "Unity Video Game 1 (WORK IN PROGRESS)",
    description:
      "(WORK IN PROGRESS) Third person shooter video game made in Unity that uses ChatGPT to empower NPCs. Third person shooter video game made in Unity that uses ChatGPT to empower NPCs. Third person shooter video game made in Unity that uses ChatGPT to empower NPCs. Third person shooter video game made in Unity that uses ChatGPT to empower NPCs.",
    tags: ["Unity", "C#", "AI", "ChatGPT"],
    imageUrl: [unityVideoGame1Img1, unityVideoGame1Img2, unityVideoGame1Img3],
    sourceCodeLink: "https://github.com/",
    youtubeLink: "https://www.youtube.com/",
    playLink: "https://unity.com/",
  },
  {
    title: "Unreal Engine Game 1 (WORK IN PROGRESS)",
    description:
      "(WORK IN PROGRESS) First person shooter multiplayer video game made in Unreal Engine 5.",
    tags: ["Unreal Engine 5", "C++", "AI", "Networking"],
    imageUrl: [unrealVideoGame1Img1, unrealVideoGame1Img2, unrealVideoGame1Img3],
    sourceCodeLink: "https://github.com/",
    youtubeLink: "https://www.youtube.com/",
    playLink: "https://www.unrealengine.com/",
  },
] as const;

export const skillsData = [
  "Unreal Engine 5",
  "Unity",
  "C++",
  "C#",
  "OpenGL",
  "Python",
  "Algorithms",
  "Data Structures",
  "Computational Complexity",
] as const;
