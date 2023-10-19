import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { siteOG, title, pubDatetime, description } = frontmatter;
  const imageUrl = typeof siteOG === "string" ? siteOG : siteOG?.src;
  const altText = `Cover image for ${title}`;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime datetime={pubDatetime} />
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            border: "2px solid #e5e5e5",
          }}
          className="w-600px h-50px mb-2 rounded object-cover"
        />
      )}
      <p>{description}</p>
    </li>
  );
}
