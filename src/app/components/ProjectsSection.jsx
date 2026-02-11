"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mortgage Loan",
    description: "Secure your dream property with our flexible mortgage solutions featuring competitive interest rates and long-term repayment options.",
    image: "/images/mogatgeLoan.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Personal Loan",
    description: "Get immediate funds for your personal needs—debt consolidation, medical expenses, or travel—with minimal documentation.",
    image: "/images/prLoan.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Home Loan",
    description: "Turn your house into a home with our customized home financing plans designed to fit your budget and requirements.",
    image: "/images/homeLoan.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Business Loan",
    description: "Fuel your business growth with strategic capital. We offer tailored loans for startups and established enterprises alike.",
    image: "/images/businessLoan.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Used Car Loan",
    description: "Drive home your preferred pre-owned vehicle with our easy financing options and quick approval process.",
    image: "/images/usedCar.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Self Employed Individual Loan",
    description: "Specialized credit solutions for entrepreneurs and self-employed professionals to manage cash flow and expansion.",
    image: "/images/selfEmployeed.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
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
    <section id="services" className="py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg px-4">
          Comprehensive financial solutions tailored to your unique needs. We simplify the lending process so you can focus on what matters.
        </p>
      </motion.div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
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
