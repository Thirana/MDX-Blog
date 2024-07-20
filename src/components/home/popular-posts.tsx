import { popularPosts } from "@/lib/placeholder-data";
import Link from "next/link";
import { Icons } from "../icons";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <Link key={post.title} href={`/blog/`}>
          <li className="flex items-start gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
