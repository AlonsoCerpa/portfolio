import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  videoImageUrl,
  sourceCodeLink,
  youtubeLink,
  playLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handlePlayDemoClick = () => {
    window.open(playLink, "_blank"); // Open in a new tab/window
  };

  const handleWatchVideoClick = () => {
    window.open(youtubeLink, "_blank"); // Open in a new tab/window
  };

  const handleSourceCodeClick = () => {
    window.open(sourceCodeLink, "_blank"); // Open in a new tab/window
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 mb-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>


          <Carousel infiniteLoop showThumbs={false} className="mb-5"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? 'absolute' : 'hidden'
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FaArrowCircleLeft className="w-12 h-12 text-white" />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? 'absolute' : 'hidden'
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FaArrowCircleRight className="w-12 h-12 text-white" />
                </div>
              );
            }}
          >
            {videoImageUrl.map((item, index) => (
              <div key={index}>
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt || ''} />
                ) : (
                  <video width="100%" height="auto" autoPlay loop muted>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </Carousel>


          {playLink.toString() !== "" && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handlePlayDemoClick}
            >
              RUN the Project in the browser!
            </button>
          )}
          {youtubeLink.toString() !== "" && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleWatchVideoClick}
            >
              WATCH a YouTube video!
            </button>
          )}
          {sourceCodeLink.toString() !== "" && (
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleSourceCodeClick}
            >
              GET the Source Code!
            </button>
          )}
        </div>
      </section>
    </motion.div>
  );
}
