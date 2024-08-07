"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A Website To Track Any Expenses",
    image: "/images/Expense-Tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/expense-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "To Do",
    description: "A Website To Help You Keep Track Off What You Need To Do",
    image: "/images/Todo-Web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/firebasetest",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "The Counter",
    description: "A Simple Website To Help You Count",
    image: "/images/Counter-Web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/firstRedux",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Database",
    description:
      "This Website Is A Database Frontend To Keep Track Of Student Information",
    image: "/images/Student-Web-Frontend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lepperson11/reactStudent",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "Fifth Project",
  //   description: "Fifth Description",
  //   image: "/images/images.jpeg",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Sixth Project",
  //   description: "Sixth Description",
  //   image: "/images/images.jpeg",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
