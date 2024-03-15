"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const projectData = [
  {
    image: "/work/1.png",
    category: "FullStack",
    name: "Website 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/projects/FoodFlow",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "HTML CSS",
    name: "Website 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Java",
    name: "Website 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Python",
    name: "Website 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "All",
  ...new Set(projectData.map((project) => project.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projectData.filter((project) => {
    return activeCategory === "All"
      ? project
      : project.category === activeCategory;
  });
  console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center xl:mb-16 mx-auto">
          Projects
        </h2>
        <Tabs defaultValue={activeCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category}
                className="capitalize w-[162px] md:w-auto"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={activeCategory}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
