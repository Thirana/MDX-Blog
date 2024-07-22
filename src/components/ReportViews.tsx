"use client";

import { useEffect } from "react";
import { fetchUrl } from "@/lib/utils"; //fetchUri = http://localhost:3000/api

export default function ReportViews({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) {
  useEffect(() => {
    const postData = async () => {
      try {
        // send POST requet to fetchUrl (http://localhost:3000/api)
        // what happens when POST request was send is defined in app/api/routs.ts
        await fetch(fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, title, category }),
        });
      } catch (error) {
        console.log("Something is up...", error);
      }
    };
    postData();
  }, [slug, category, title]);

  return <></>;
}
