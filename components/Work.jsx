"use client";
import Link from "next/link";
import { Button } from "./ui/button-copy"; // Fix the casing of the import statement

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Fullstack",
    name: "Verisight",
    description:
      "A browser extension using AI/ML and community efforts to help people assess the credibility of news articles",
    link: "/",
    github: "https://github.com/orgs/verisight/repositories",
  },
  {
    image: "/work/2.png",
    category: "Fullstack",
    name: "Blog Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Java",
    name: "Westminster Shopping Centre",
    description:
      "A product management application utilizing Java and Java Swing, featuring product storage and basket cart management with file handling capabilities",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Fullstack",
    name: "The FoodFlow",
    description:
      "A revolutionary food redistribution system aimed at addressing a critical issue in our society - Excess Food Waste and Hunger.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start items-center">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eius
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[580px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only first 4 */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
