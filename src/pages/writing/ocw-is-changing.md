---
title: OCW is Changing

layout: ../../layout/blog.astro
---

<!--toc:start-->

- [Overview](#overview)
- [How does this affect you?](#how-does-this-affect-you)
- [Why restructure?](#why-restructure)
- [Technical Writeup](#technical-writeup)
  - [Updating Convex](#updating-convex)
  - [Multi-tenant Architecture](#multi-tenant-architecture)
  <!--toc:end-->

## Overview

Over the last three years, we’ve all poured our hearts and souls into OCW in one way or another. It’s been one of my favorite projects to work on. There’s something incredibly special about seeing people genuinely benefit from something we built together as a community — it’s a feeling that’s truly unique and deeply fulfilling.

But the scope of OCW has grown far beyond just Creek. Education itself is changing — fast. With the rise of AI-assisted learning, the way students learn will never look the same again, hopefully for the better. As this market expands, the need for personalized context and high-quality resources becomes absolutely crucial. Because education today is broad and decentralized, students naturally gravitate toward highly tailored content. The data backs this up — just looking at the growth and engagement on our website shows us how strong that demand really is.

These trends have led me to think seriously about expanding OpenCourseWare beyond our school. After speaking with students from other schools and refining the idea, I’ve decided to remove the Creek-specific branding from the OCW project altogether.

We’ll be transitioning from [creekocw.com](http://creekocw.com/) → [creek.ocwproject.org](http://creek.ocwproject.org/).

## How does this affect you?

It probably doesn’t — at least not in your day-to-day. You can continue writing and contributing just as you always have. [creekocw.com](http://creekocw.com/) will simply become one of many open coursewares hosted under a broader umbrella. If you’re interested in why we’re restructuring this way, read on.

## Why restructure?

Honestly, not long after CreekOCW started taking off, I knew I wanted to expand to other schools. I floated the idea as early as sophomore year and began the actual expansion work my junior year. Initially, the plan looked something like this:

![image.png](https://moltmqa28u.ufs.sh/f/0q2U2s5hTRxUskgn8Zq4EJTgorvbadjFlBGViNL6wMk2nXZ9)

The assumption was that each school would independently create its own OpenCourseWare site by forking our codebase and hosting it themselves. This model seemed promising at first for a few reasons. It allowed for local and tailored content which is something we didn’t want to compromise on. It also gave students full autonomy over the creation and maintenance of their platforms. And, admittedly, it meant less direct work for me. I’d just maintain a centralized site while developers at each school managed their own forks, merging updates as needed.

However, I quickly realized the technical barriers were too high. While a few schools successfully forked the code and launched their own versions, the need for a dedicated technical lead was non-trivial. Ultimately, maintaining these independent sites would have fallen back on me and, eventually, the core OCW Project team. So that third supposed benefit, less work, wasn’t really true at all.

After a lot of discussion with friends and collaborators, we decided a better approach would be to move toward a **multi-tenant architecture**. This would let students create, manage, and update their own school’s open courseware, all without ever touching the code.

This new approach is radically simpler and far more scalable. While it requires more upfront development time ( converting our static content into a dynamic system with built-in admin tool ) but reduces long-term friction

Here’s what it looks like:

![image.png](https://moltmqa28u.ufs.sh/f/0q2U2s5hTRxUBsvIlPWE0uwnJQ2oYcWqd8sOyV4hG3BM1bjS)

## Technical Writeup

I am the point where I’ll be loosing 90% of you guys but this is how we migrated.

### Updating Convex

We chose to go with convex as our db of choice in our last rewrite. In hindsight this was an amazing decision. Convex is truly a revolutionary piece of technology.

Here’s how our schema looks like now:

![Screenshot 2025-10-15 at 4.03.18 PM.png](https://moltmqa28u.ufs.sh/f/0q2U2s5hTRxURiu73iWSpQNjr7z3BU1sDiWqZCkw86lH2AOI)

We just added the “school” field which would act as our identifier for which school a table belonged to.

We then updated all of our convex functions to incorporate this school field.

### Multi-tenant Architecture

Next we wanted to update the application itself to support a multi-tenant architecture, next thankfully makes this super easy! We started with our middleware:

```tsx
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";
import { rootDomain } from "./lib/site";

function extractSubdomain(request: NextRequest): string | null {
  const url = request.url;
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  if (url.includes("localhost") || url.includes("127.0.0.1")) {
    const fullUrlMatch = url.match(/http:\/\/([^.]+)\.localhost/);
    if (fullUrlMatch && fullUrlMatch[1]) {
      return fullUrlMatch[1];
    }

    if (hostname.includes(".localhost")) {
      return hostname.split(".")[0];
    }

    return null;
  }

  const rootDomainFormatted = rootDomain.split(":")[0];
  // preview deplouments
  if (hostname.includes("---") && hostname.endsWith(".vercel.app")) {
    const parts = hostname.split("---");
    return parts.length > 0 ? parts[0] : null;
  }

  const isSubdomain =
    hostname !== rootDomainFormatted &&
    // www. is not a school
    hostname !== `www.${rootDomainFormatted}` &&
    hostname.endsWith(`.${rootDomainFormatted}`);

  return isSubdomain ? hostname.replace(`.${rootDomainFormatted}`, "") : null;
}

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  const subdomain = extractSubdomain(req);

  if (subdomain) {
    if (pathname.startsWith("/ocw-admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    // writes each school to it's own dynamic home page
    if (pathname === "/") {
      return NextResponse.rewrite(new URL(`/s/${subdomain}`, req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

next we leveraged react context to have subdomain information on the client:

```tsx
"use client";
import React, { useContext } from "react";
import { createContext } from "react";
import type { FunctionReturnType } from "convex/server";
import { api } from "@ocw-rewrite/backend/convex/_generated/api";
import { useQuery } from "convex/react";

type SiteContext = {
  siteConfig: FunctionReturnType<typeof api.site.getSiteConfig> | null;
  subdomain: string;
  user?: {
    isSiteAdmin: boolean;
  };
};

export const SiteContext = createContext<SiteContext | null>(null);

export const SiteContextProvider = ({
  children,
  subdomain,
}: {
  children: React.ReactNode;
  subdomain: string | null;
}) => {
  if (!subdomain) {
    return <>{children}</>;
  }
  const siteConfig = useQuery(api.site.getSiteConfig, {
    school: subdomain,
  });

  const user = useQuery(api.permissions.getSiteUser, {
    school: subdomain,
  });

  return (
    <SiteContext.Provider
      value={{
        siteConfig: siteConfig ?? null,
        subdomain,
        user: user ? { isSiteAdmin: user.role === "admin" } : undefined,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within a SiteContextProvider");
  }
  return context;
};
```

On server components we can extract the subdomain with next’s `headers` function

```tsx
import "server-only";
import { headers } from "next/headers";

export async function extractSubdomain(): Promise<string | null> {
  const headersList = await headers();
  const subdomain = headersList.get("host");
  const discriminant = subdomain?.split(".")[0];

  return discriminant ?? null;
}
```

now before we render a page we can simply

```tsx
export default async function Page() {
  const subdomain = await extractSubdomain();
  if (!subdomain) {
    // handle based on page
  }
}
```

Those are the high level things we did migrate. There were obviously more things like migrating marketing pages to be dynamic. You can free to go to <https://github.com/not-ani/ocw-rewrite> and look through our commit history to get a sense of how the migration went.
