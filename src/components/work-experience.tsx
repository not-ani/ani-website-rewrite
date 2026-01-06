"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const experiences = [
  {
    company: "ámaxa",
    role: "Chief Technology Officer",
    period: "February 2024 - Present",
    type: "Part Time",
    description: "Lead the development of ámaxa's platform and internal tools",
    url: "https://www.amaxaimpact.org",
    achievements: [
      `Led a team of university-level engineers and recent graduates, overseeing end-to-end product development and
technical strategy directly helping generate over 4, 200$ in revenue`,
      `Directed the design and launch of a centralized digital platform that streamlined communication and project management
for 150+ clients, significantly improving operational efficiency increasing customer satisfaction.`,
      `Lead the development of in house tools to onboard, interview, and process applicants, reducing turn-over-time by
38% and drop-off rate by 32%`,
      `Engineered scalable and high-performance systems using Convex, PostgreSQL, TypeScript, and React, ensuring
reliability and seamless integration across services.`,
    ],
    previousRoles: [
      {
        role: "Intern",
        period: "September 2023 - February 2024",
        description:
          "Wrote the foundations for internal tools and the platform. Moved project timeline up from multiple months to weeks",
      },
    ],
  },
];

export function WorkExperience() {
  const [openItem, setOpenItem] = useState<string>("item-0");

  return (
    <section id="work" className="scroll-mt-12 py-8">
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Work Experience
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </div>
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
        >
          {experiences.map((exp, index) => {
            const itemValue = `item-${index}`;
            const isOpen = openItem === itemValue;

            return (
              <AccordionItem
                key={index}
                value={itemValue}
                className="border-b border-border/40"
              >
                <AccordionTrigger className="py-3 hover:bg-muted/20 hover:no-underline px-0">
                  <div className="flex items-center justify-between w-full pr-2">
                    <div className="flex items-baseline gap-3 overflow-hidden">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-medium hover:text-foreground/80 transition-colors duration-200 text-blue-500 underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                      </a>
                      <AnimatePresence mode="wait">
                        {!isOpen && (
                          <motion.div
                            key="details"
                            initial={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
                            }}
                            className="flex items-baseline gap-3"
                          >
                            <span className="text-xs text-muted-foreground">
                              ·
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {exp.role}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ·
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {exp.period}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                    className="space-y-3 border-border/40 bg-card/95 p-4 rounded-sm backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15,
                      }}
                      className="space-y-1"
                    >
                      <h3 className="font-mono text-sm font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                      }}
                      className="text-xs leading-relaxed text-foreground/80"
                    >
                      {exp.description}
                    </motion.p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.25,
                        }}
                        className="space-y-1.5 pt-1"
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.3 + i * 0.05,
                            }}
                            className="flex items-start gap-2"
                          >
                            <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-muted-foreground" />
                            <span className="text-xs text-foreground/70">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    {exp.previousRoles && exp.previousRoles.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.35,
                        }}
                        className="space-y-3 pt-3 mt-3 border-t border-border/20"
                      >
                        <h4 className="font-mono text-xs font-semibold text-muted-foreground">
                          Previous Roles
                        </h4>
                        {exp.previousRoles.map((prevRole, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.4 + i * 0.05,
                            }}
                            className="space-y-1"
                          >
                            <h3 className="font-mono text-sm font-semibold">
                              {prevRole.role}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {prevRole.period}
                            </p>
                            <p className="text-xs leading-relaxed text-foreground/80">
                              {prevRole.description}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
