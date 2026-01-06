"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    title: "The OpenCourseWare Project",
    description:
      "Built a school agnositc Learning Management System (LMS) to share high-quality and local resources. Integrated a custom AI agent using RAG and LLMs to unify thousands of educational materials into an interactive student experience. Reached over 4,000 total users and over 20,000 views",
    tags: ["TypeScript", "React/NextJS", "Convex", "Python"],
    link: "https://ocwproject.org",
  },
  {
    title: "Informal",
    description:
      "Created an AI-first alternative to Google Forms for building validated, intelligent surveys. Developed a multi-model AI with persistent memory to extract insights from documents and autonomously generate surveys based on key data.",
    tags: ["TypeScript", "React/NextJS", "Convex"],
    link: "https://www.informalapp.com/",
  },
  {
    title: "fcopy",
    description:
      "Engineered a command-line utility that quickly copies files and folders into the clipboard. Implemented substring matching with Levenshtein distance and recursive traversal with parallel processing to accelerate search performance.",
    tags: ["Go", "CLI"],
    link: "https://github.com/not-ani/fcopy",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-12 py-8">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1"
        >
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Projects
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </motion.div>
        <Accordion
          type="multiple"
          defaultValue={projects.map((_, index) => `item-${index}`)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-b border-border/40"
              >
                <AccordionTrigger className="py-3 hover:bg-muted/20 hover:no-underline px-0 transition-all duration-200">
                  <div className="flex items-center justify-between w-full pr-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm hover:text-foreground/80 text-blue-400 underline transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.title}
                    </a>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-sm p-4"
                  >
                    <div className="space-y-3">
                      {project.image ? (
                        <div className="aspect-[2/1] overflow-hidden rounded-sm bg-muted">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ) : null}
                      <p className="text-xs leading-relaxed text-foreground/80">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: tagIndex * 0.05,
                            }}
                            className="rounded-sm bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:bg-muted/70 transition-colors duration-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
