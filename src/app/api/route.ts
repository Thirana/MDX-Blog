import { db } from "@/db";

export async function POST(request: Request) {
  // destructuring request body
  const { slug, title, category } = await request.json();

  try {
    // find wheather a row exist based on slug
    const existingPost = await db.blog.findUnique({
      where: { slug: slug },
    });

    // if a row exist, increment it view_count by one
    if (existingPost) {
      await db.blog.update({
        where: { slug: slug },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      // if a row does not exit, create a new row
      await db.blog.create({
        data: {
          slug: slug,
          title: title,
          category: category,
        },
      });
    }
  } catch (error) {
    console.error("Error updating page view", error);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
}
