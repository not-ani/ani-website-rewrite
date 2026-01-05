import type { APIRoute, GetStaticPaths } from 'astro';
import { ImageResponse } from '@vercel/og';

// Define the blog posts data
const blogPosts = [
  {
    slug: 'do-it-yourself',
    title: 'You have to be willing to do it yourself',
    description: 'Reflections on leadership and the importance of understanding every aspect of your organization.',
  },
  {
    slug: 'using-ai',
    title: 'Using AI To Learn',
    description: 'How junior engineers should approach AI tools while still building genuine expertise.',
  },
  {
    slug: 'ocw-is-changing',
    title: 'OCW is Changing',
    description: 'Announcing the transition to a multi-tenant architecture for OpenCourseWare.',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

interface Props {
  post: { slug: string; title: string; description: string };
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as Props;

  const html = {
    type: 'div',
    props: {
      tw: 'w-full h-full flex flex-col items-center justify-center px-20',
      style: {
        background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
        fontFamily: 'monospace',
      },
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex flex-col items-center justify-center max-w-4xl',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-6xl font-bold text-white text-center leading-tight',
                  style: {
                    fontFamily: 'monospace',
                  },
                  children: post.title,
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
};

