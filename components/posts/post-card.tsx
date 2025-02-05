import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";
import {
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

export async function PostCard({ post }: { post: Post }) {
  const media = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : null;
  const author = post.author ? await getAuthorById(post.author) : null;
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = post.categories?.[0]
    ? await getCategoryById(post.categories[0])
    : null;

  return (
    <Link
      className={cn(
        "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:bg-accent/75 transition-all",
      )}
      href={`/posts/${post.slug}`}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center bg-muted">
          {media?.source_url ? (
            <Image
              alt={post.title?.rendered || "Post thumbnail"}
              className="h-full w-full object-cover"
              height={200}
              src={media.source_url}
              width={400}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground">
              No image available
            </div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered || "Untitled Post",
          }}
          className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: post.excerpt?.rendered
              ? post.excerpt.rendered.split(" ").slice(0, 12).join(" ").trim() +
                "..."
              : "No excerpt available",
          }}
          className="text-sm"
        />
      </div>

      <div className="flex flex-col gap-4">
        <hr />
        <div className="flex justify-between items-center text-xs">
          <p>{category?.name || "Uncategorized"}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
