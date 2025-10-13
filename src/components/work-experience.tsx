import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowUpRight, Check } from "lucide-react";

const experiences = [
  {
    company: "ámaxa",
    role: "Chief Technology Officer",
    period: "February 2024 - Present",
    type: "Part Time",
    description:
      "Lead the development of ámaxa's web platform, enhancing project management and facilitating more effective communication for 150+ clients across 45+ countries.",
    url: "https://www.amaxaimpact.org",
    achievements: [
      "Architected and deployed scalable web platform",
      "Improved client communication efficiency ",
      "Managed cross-functional development team",
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="work" className="scroll-mt-12 py-8">
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Work Experience
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </div>
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <HoverCard key={index} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center justify-between border-b border-border/40 py-3 transition-colors hover:bg-muted/20"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-medium">
                      {exp.company}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {exp.role}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="start"
                className="w-[400px] border-border/40 bg-card/95 p-4 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-mono text-sm font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/80">
                    {exp.description}
                  </p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-muted-foreground" />
                          <span className="text-xs text-foreground/70">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
