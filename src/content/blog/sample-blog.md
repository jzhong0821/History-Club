---
author: Jack Zhong
pubDatetime: 2023-10-16T05:55:00Z
title: Sample Blog in Latin
postSlug: sample-blog
featured: true
draft: false
tags:
  - docs
  - sample
  - will be deleted
ogImage: /public/og.png
siteOG: /public/assets/001.jpeg
description:
  Some rules & recommendations for creating or adding new posts using AstroPaper
  theme.
---

![image](https://www.iamag.co/wp-content/uploads/2014/02/Syd-Mead-4.jpg)

Hoc est subtitulum, subtitulum est titulus sub principali ut melius tradat ideam centralem tractatus. Hoc est subtitulum, subtitulum est titulus sub principali ut melius tradat ideam centralem tractatus.

---

## Table of contents

## Frontmatter

Textus corporis vel copia corporis est textus formans principalem contentum libri, tabloidis, paginæ web, aut cujuslibet alterius operis typographici vel digitalis. Hoc est in contrastu ad componentes additivas ut tituli, imagines, tabulæ, notas infra paginam etc. in singulis paginis, etiam ad paginas præmateriæ quæ introducunt librum.

Textus corporis duas significationes leviter diversas habet, pro contextu. Designer libri, sollicitus de serie totali libri, considerat eum ut paginas quæ majoritatem libri constituunt, habentes corpus textus vel corpus materiæ. Typographus, sollicitus de dispositione textus in pagina, videt 'textus corporis' ut partes textus principis quæ in columnas vel justificatas ut paragraphi effunduntur, distinctas a titulis et ullis picturis quæ de corpore [principali elevantur](https://en.wikipedia.org/wiki/Body_text).

Here is the list, pretty cool huh?

| Property           | Description                                                                     | Remark                                        |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**        | Title of the post. (h1)                                                         | required<sup>\*</sup>                         |
| **_description_**  | Description of the post. Used in post excerpt and site description of the post. | required<sup>\*</sup>                         |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                          | required<sup>\*</sup>                         |
| **_author_**       | Author of the post.                                                             | default = SITE.author                         |
| **_postSlug_**     | Slug for the post. Will automatically be slugified.                             | default = slugified title                     |
| **_featured_**     | Whether or not display this post in featured section of home page               | default = false                               |
| **_draft_**        | Mark this post 'unpublished'.                                                   | default = false                               |
| **_tags_**         | Related keywords for this post. Written in array yaml format.                   | default = others                              |
| **_ogImage_**      | OG image of the post. Useful for social media sharing and SEO.                  | default = SITE.ogImage or generated OG image  |
| **_canonicalURL_** | Canonical URL (absolute), in case the article already exists on other source.   | default = `Astro.site` + `Astro.url.pathname` |

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

Latinum est `lingua valde` inflecta, cum tribus generibus distinctis (`masculino`, `feminino`, et neutro), sex vel septem casibus nominum (nominativo, accusativo, genitivo, dativo, ablativo, vocativo, et locativo vestigiali), quinque declinationibus, quattuor conjugationibus verborum, sex temporibus (`praesenti`, `imperfecto`, futuro, perfecto, plusquamperfecto, et futuro perfecto), tribus personis, tribus modis, duabus vocibus (passiva et activa), duobus vel tribus aspectibus, et duobus numeris (`singulari et plurali`). Alphabetum Latinum directe derivatur ex alphabetis Etrusco et Graeco.

```ts
// src/content/config.ts
Wow! this website can actually display text in the form of a program?!
Wow! this website can actually display text in the form of a program?!
Wow! this website can actually display text in the form of a program?!
```

![image](/src/assets/images/AstroPaper-v3.png)

### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml
# src/content/blog/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
postSlug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ""
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## Adding table of contents

Per defaltam, nuntia nullam tabellam contentorum includit. Toc includendi, specifice denotare debes.

Scribe `Tabulam contentorum` in h2 forma (## in markdownum) et pone ubi vis in cursore compareri.

Exempli gratia, si tabulam contentorum sub paragrapho introrsum (sicut soleo) ponere vis, hoc modo facere potes.

```md
---
# some frontmatter
---

None of the content in this blog is important AT ALL!

## Table of contents

<!-- the rest of the post -->
```

## Headings

Unum est de titulis notare. AstroPaper epistulae diarii utuntur titulo (title in frontmatter) ut principale caput cursoris. Reliquum ergo caput in postibus uti debet h2 ~ h6.

Haec regula non facienda est, sed valde commendatur pro visivae, accessibilitate et SEO proposita.

> Unum est de titulis notare. AstroPaper epistulae diarii utuntur titulo (title in frontmatter) ut principale caput cursoris. Reliquum ergo caput in postibus uti debet h2 ~ h6.

> Haec regula non facienda est, sed valde commendatur pro visivae, accessibilitate et SEO proposita.

Now what? he can add quotes onto the site?

## Storing Images for Blog Content

Here are two methods for storing images and displaying them inside a markdown file.

> Note! If it's a requirement to style optimized images in markdown you should [use MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files).

### Inside `src/assets/` directory (recommended)

You can store images inside `src/assets/` directory. These images will be automatically optimized by Astro through [Image Service API](https://docs.astro.build/en/reference/image-service-reference/).

You can use relative path or alias path (`@assets/`) to serve these images.

Example: Suppose you want to display `example.jpg` whose path is `/src/assets/images/example.jpg`.

```md
![something](@assets/images/example.jpg)

<!-- OR -->

![something](../../assets/images/example.jpg)

<!-- Using img tag or Image component won't work ❌ -->
<img src="@assets/images/example.jpg" alt="something">
<!-- ^^ This is wrong -->
```

> Technically, you can store images inside any directory under `src`. In here, `src/assets` is just a recommendation.

### Inside `public` directory

You can store images inside the `public` directory. Keep in mind that images stored in the `public` directory remain untouched by Astro, meaning they will be unoptimized and you need to handle image optimization by yourself.

For these images, you should use an absolute path; and these images can be displayed using [markdown annotation](https://www.markdownguide.org/basic-syntax/#images-1) or [HTML img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

Example: Assume `example.jpg` is located at `/public/assets/images/example.jpg`.

```md
![something](/assets/images/example.jpg)

<!-- OR -->

<img src="/assets/images/example.jpg" alt="something">
```

## Bonus

### Image compression

When you put images in the blog post (especially for images under `public` directory), it is recommended that the image is compressed. This will affect the overall performance of the website.

My recommendation for image compression sites.

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### OG Image

The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.

> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).
