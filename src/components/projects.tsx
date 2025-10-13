import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cherry Creek OpenCourseWare",
    description:
      "Built a Learning Management System (LMS) for Cherry Creek High School to share high-quality resources. Integrated a custom AI agent using RAG and LLMs to unify thousands of educational materials into an interactive student experience. Reached over 2,000 total users and 500 monthly active users.",
    image: "/images/ocw.png",
    tags: ["TypeScript", "React/NextJS", "Convex", "Python"],
    link: "https://creekocw.com",
  },
  {
    title: "SAT OpenCourseWare",
    description:
      "Developed a scalable web platform dedicated to hosting high-quality SAT practice content, increasing nationwide accessibility. Built a scraper pipeline that cleaned and parsed over 5,000 SAT questions, helping students improve scores by several hundred points.",
    image: "/images/sat-ocw.png",
    tags: ["TypeScript", "React/NextJS", "Convex", "Python"],
    link: "https://sat.creekocw.com",
  },
  {
    title: "Informal",
    description:
      "Created an AI-first alternative to Google Forms for building validated, intelligent surveys. Developed a multi-model AI with persistent memory to extract insights from documents and autonomously generate surveys based on key data.",
    image: "/images/informal.png",
    tags: ["TypeScript", "React/NextJS", "Convex"],
    link: "https://www.informalapp.com/",
  },
  {
    title: "fcopy",
    description:
      "Engineered a command-line utility that quickly copies files and folders into the clipboard. Implemented substring matching with Levenshtein distance and recursive traversal with parallel processing to accelerate search performance.",
    image: "/images/fcopy.png",
    tags: ["Go", "CLI"],
    link: "https://github.com/not-ani/fcopy",
  },
  {
    title: "Operating System in C",
    description:
      "Developed a RISC-V operating system from scratch in C and Assembly, implementing process scheduling, file system I/O, memory allocation, kernel panic handling, and system calls. Documented system architecture using virtualization and emulator testing.",
    image: "/images/os-c.png",
    tags: ["C", "Assembly", "Systems Programming"],
    link: "#",
  },
  {
    title: "Machine Learning from Scratch",
    description:
      "Built machine learning algorithms from scratch in C, including regression models, k-NN classifiers, and gradient descent optimization. Conducted in-depth analyses of algorithmic behavior and visualized gradient landscapes to illustrate underlying math.",
    image: "/images/ml-scratch.png",
    tags: ["C", "Python", "Statistics", "Machine Learning"],
    link: "#",
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
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border-b border-border/40 py-3 transition-colors hover:bg-muted/20"
            >
              <a
                href={project.link}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-sm transition-colors group-hover:text-foreground/80">
                  {project.title}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Hover card that appears on hover */}
              <div className="pointer-events-none absolute left-0 top-full z-10 mt-2 w-full opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 md:w-96">
                <div className="rounded-sm border border-border bg-card p-4 shadow-lg">
                  <div className="space-y-3">
                    <div className="aspect-[2/1] overflow-hidden rounded-sm bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
