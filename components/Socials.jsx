"use client";

import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/pragash-sasitharan/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "https://www.github.com/ppt100/",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/pragash.sasitharan/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.instagram.com/pragash_sasitharan/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
