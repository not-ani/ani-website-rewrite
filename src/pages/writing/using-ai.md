---
title: Learning in the Age of Agents
description: How we can use AI tools while still learning.
layout: ../../layout/blog.astro
---

Recently, I've seen a lot of conflicting takes on how AI should be used by junior engineers. As a developer on the younger side of things, I've spent time thinking through this myself and I think I've struck a good approach to using AI. This post explores that approach and the core tension that modern tooling creates between building expertise and productivity.
First let’s get our definitions straight:

- Agents: systems that can write, execute, and iteratively improve code autonomously to solve problems or complete tasks, i.e, Claude Code, Cursor Agent, etc
- AI: In this article when I refer to AI it will be in the context of Large Language Models (LLMs) like Claude, GPT, Gemini, etc
- Junior Engineers: Developers who are less experienced at programming, often students, who are new to the industry.
- Vibe Coding: Letting AI completely take the driver’s seat, not looking at the changes it makes, and treating the as a black box

The central conflict is this: AI is fundamentally changing the way that development is done. As the capability of AI and the tools surrounding it increase, many developers are offloading more and more tasks to it. This presents a question for junior engineers: should they follow their more senior counterparts by embracing these tools? If they do, what are the consequences?

After consulting with many developers with much more experience than me, the consensus seems to be that there is undoubtedly a large tradeoff to using tools like agents as a junior engineer. Different people have different perspectives on what the magnitude of the consequences will be but the core idea is this: learning and building expertise is an active process and not a passive one. By offloading tasks to tools like AI agents as a junior developer, you miss out on struggling with the problem you’re trying to solve, whereas your more experienced counterparts have already solved those same problems many times and have the capability to do it themselves. If we evaluate that from a pedagogical perspective, offloading tasks you
can't do yourself obfuscates key parts of the learning process and
replaces it with a false sense of progress.

I don’t think this problem is unique to programming, every industry is experiencing this. Consequently, we can generalize the problem of how AI affects the progression of novices.

But enough preamble. My thesis is that the only way to learn and progress is without dependence on AI and more specifically tools like agents.

To understand why this is necessary, we need to look outside of the programming and examine the education system. If you were to walk into a random high school English class, I would be willing to bet that there are a non-trivial number of students who hadn't written an essay completely unassisted in years [[1]](#footnotes). I think that we can all unequivocally agree that this is a bad thing. Dependence on AI has unintentionally led to many students effectively infantilizing themselves. In the context of the English classroom, this has led to students losing the skill of writing and consequently conveying their thoughts in a concise manner.

I think this can be used as a case study to highlight the flaws for students, and in a larger sense, junior engineers approach using AI: We will offload too much effort to AI. Struggling with problems is required to learn. When a junior engineer uses AI agents, they’re not nearly as involved in that struggle, they rob themselves of a core part of learning. Even if one does possess the maturity to not let AI into the driver's seat, it's very difficult to draw a line at what is and isn't offloading cognitive effort. It's very hard to tell what you can or cannot do if you haven't attempted similar problems before.

The only way to avoid this problem is by intentionally avoiding AI tools some portion of the time.

But it’s very difficult to avoid agents and other AI tools. This is a struggle I face myself; I am by no means a very experienced developer, but at my current gig I'm in charge of leading a team of 3 developers. I have some domain knowledge, but still have a lot to learn, and I recognize that. However it would be insane for me not to use AI enabled tools like agents. We have deadlines, clients, and obligations and I would be failing to meet my obligation to the best of my ability by not using AI.

The approach I’ve been using to try and continuously improve is twofold:

(1) AI is a valuable tool. Use it intentionally.

One very clear example of why AI is so valuable in the learning process is how it removes the need for "bottom-up" learning in many instances. This shift is possible because of something that’s never existed before: junior engineers now have infinite access to a better programmer. It is now possible to go far deeper into the underlying technologies you use without working from the ground up. You can start with a high-level abstraction like React and easily use tools to explore down to the lowest levels.

For instance, when I first learned about Convex, I cloned their Rust-based codebase and used Cursor to ask questions about its inner workings. This wouldn't have been possible without LLMs. Previously, to achieve the same effect, I would have needed to find a developer who (1) knows Rust much better than I do and (2) is already familiar with the Convex codebase.

However, the core idea here is understanding. Learning how something works in isolation may seem trivial, but when you zoom out, you realize that deep understanding creates a highly connected graph of knowledge and experiences that we call expertise.

This suggests that you should only use tools like AI agents after you’ve added the relevant knowledge node to your graph, or, simply put: don’t use the tool to implement something you couldn't implement yourself [[2]](#footnotes). This also means you should try to understand everything the AI is doing completely before you accept its changes, in other words avoid “vibe coding” and make using agents a more intentional and involved process.

But this raises another question: what constitutes deep understanding? Is knowing how the solutions you are implementing work enough? I would argue that it's only a part of it. Going back to the Convex example: I had a good grasp of the problems Convex solved thanks to a series of videos by Theo from [t3.gg](https://t3.gg), explaining why [t3.chat](https://t3.chat) switched to Convex after trying numerous other technologies. That understanding of what necessitated Convex gave me a much more holistic view and made me more informed about why the solution was chosen, not just how.

Yet, I'd argue I would still be missing a key part of the learning process, even after watching Theo’s videos. If we treat experience as a graph, each node has a certain weight, representing the strength of its understanding. If I had been the one trying out different databases for t3.chat and building out those solutions myself, I would not only have a much higher weight on that node but also have more nodes connected to it.

This brings me to my second point:

(2) When trying to learn something new, work on projects purely as technical exercises.

Prior to LLMs becoming ubiquitous in the developer world, juniors building things would gain experience by spending hours making mistakes and overcoming challenges independently; I don’t think there's a way around that: we still have to build things just to learn and not to ship.

Good projects are often projects that solve problems, especially ones that you have, this leads to us wanting to create the solution as fast as possible. But we still need to build things just to learn and be okay with slowing down. This tradeoff has to be made even, regardless of how much it sucks.

I recently have found myself wanting to replace the native MacOS file explorer with something better. I also have been wanting to work more with Rust.
I needed the better file explorer to use ASAP, so I built it with Tauri and React. My React skills are considerably better than my Rust skills so this allowed me to use agents to build a pretty decent file explorer quickly.

After I had built a working product, I went back and wrote a version of the project purely in Rust. This version took 10x longer to build, but I learned so much more from it.

When building these projects by myself, I still use AI, but with a few guidelines that make it possible to use LLMs effectively when learning:

- Use Google and not an LLM directly. Because Google has a pretty decent AI summary for searches, you can look up reference material very quickly without falling into the trap of LLMs giving you too much information.
- Only use AI after struggling with the problem for a while. I don't mean for simple syntax issues or basic documentation search, but if you want to know what method for rendering something is more performant, build both out in smaller versions and compare. LLMs can give you the end lesson that people have picked up on before, but true competence comes from understanding the circumstances around the solution and what led to it in the first place. The more you can understand those points, the better off you'll be.

# Footnotes

[1] Declining student writing quality is not a new problem, and my claim that many students haven’t written essays unassisted in years is largely anecdotal; however, it isn’t completely unfounded. A 2013 report from the National Association of Scholars discusses this issue ([Carter and Harper 13](http://nas.org/academic-questions/26/3/student_writing_strategies_to_revers_ongoing_decline-2)). More recent empirical evidence suggests that large language models (LLMs) may be uniquely worsening this problem. A large-scale longitudinal analysis (2025) by the University of Warwick examined 4,820 student reports written between 2016 and 2025. It found that, since the launch of ChatGPT, student writing has become significantly more formal and more “positive” in tone, regardless of topic. While those traits might seem like improvements, the study’s authors found that this shift reflects a decrease in critical engagement and originality. Students are writing in a style that mirrors AI-generated text. In other words, as students increasingly rely on AI to assist with writing, their work becomes less personally expressive and less persuasive, suggesting that these tools are not just changing how students write but also eroding their ability to think and argue independently ([Mak and Walasek 25](https://wrap.warwick.ac.uk/id/eprint/195006/1/1-s2.0-S2666920X2500147X-main.pdf)).

[2] I use the word "implement" and not "understand" very intentionally.
You don't truly understand something until you can implement it. Just
saying you "understand" something without being able to implement it is
like studying for a math test by skimming lecture notes. The
"understanding" you've developed falls apart when you sit in front of
the test.
