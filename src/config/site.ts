type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Coding Jitsu Blog",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "https://mdx-blog-thirana.vercel.app/",
  ogImage: "https://mdx-blog-thirana.vercel.app/og",
  links: {
    twitter: "https://twitter.com/codingjitsu",
    github: "https://github.com/codingjitsu",
  },
};
