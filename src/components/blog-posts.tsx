"use client";

import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "You have to be willing to do it yourself",
    excerpt: "",
    date: "Oct 13, 2025",
    readTime: "2 min read",
    link: "/writing/do-it-yourself",
  },
  {
    title: "Using AI To Learn",
    excerpt: "",
    date: "Jan 4, 2026",
    readTime: "4-5 min read",
    link: "/writing/using-ai",
  },
];

export function BlogPosts() {
  return (
    <section id="Writing" className="scroll-mt-12 py-8">
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1"
        >
          <h2 className="font-mono text-xl font-bold tracking-tight md:text-2xl">
            Writing
          </h2>
          <div className="h-px w-12 bg-foreground" />
        </motion.div>
        <div className="space-y-0">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
            >
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.a
                    href={post.link}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center justify-between border-b border-border/40 py-3 transition-colors hover:bg-muted/20"
                  >
                    <span className="font-mono text-sm font-medium transition-colors duration-200">
                      {post.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground">
                        {post.date}
                      </span>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </motion.a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 border-border/40 bg-background/95 p-4 backdrop-blur-sm">
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
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
                  </motion.div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
