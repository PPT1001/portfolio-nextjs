"use client";
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Website 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Website 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "HTML js",
    name: "Website 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Full Stack",
    name: "Website 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "/",
  },
];

const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      <Link href="/projects/FoodFlow">Hello</Link>
    </section>
  );
};

export default Projects;
