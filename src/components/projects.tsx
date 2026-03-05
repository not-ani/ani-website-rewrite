"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    title: "Enkode",
    description:
      "Built a classroom management system for CS education with a sandboxed multi-language IDE, anti-cheat telemetry, and an AI-native grading pipeline. Saves teachers 10+ hours per week by eliminating manual work verification and clunky tooling.",
    tags: ["TypeScript", "React/NextJS", "AI"],
    link: "https://enkode.creekocw.com/",
  },
  {
    title: "BlockVault",
    description:
      "Engineered a local, high-performance debate evidence search engine in Rust and SolidJS. Enables instant search through years of prep files and trivial speech doc assembly, saving critical prep time in rounds.",
    tags: ["Rust", "SolidJS", "Search"],
    link: "https://github.com/not-ani/blockfile",
  },
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
        <div className="space-y-1">
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Projects
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </div>
        <Accordion
          type="multiple"
          defaultValue={projects.map((_, index) => `item-${index}`)}
        >
          {projects.map((project, index) => (
            <AccordionItem
              key={index}
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
                <div className="rounded-sm p-4">
                  <div className="space-y-3">
                    <p className="text-xs leading-relaxed text-foreground/80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:bg-muted/70 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
