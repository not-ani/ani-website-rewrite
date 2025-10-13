import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "You have to do it yourself",
    excerpt: "",
    date: "Oct 13, 2025",
    readTime: "2 min read",
    link: "/writing/do-it-yourself",
  },
];

export function BlogPosts() {
  return (
    <section id="Writing" className="scroll-mt-12 py-8">
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Writing
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </div>
        <div className="space-y-0">
          {blogPosts.map((post, index) => (
            <HoverCard key={index} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <a
                  href={post.link}
                  className="group flex items-center justify-between border-b border-border/40 py-3 transition-colors hover:bg-muted/20"
                >
                  <span className="font-mono text-sm font-medium">
                    {post.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">
                      {post.date}
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-border/40 bg-background/95 p-4 backdrop-blur-sm">
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-1 text-[10px] text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
