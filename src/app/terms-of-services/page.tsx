import Container from "@/components/Container";
import { getTermsOfServices } from "../blog/utils";
import { MainNav } from "@/components/main-nav";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
