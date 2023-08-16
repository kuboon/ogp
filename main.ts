import { Hono } from "https://deno.land/x/hono@v3.3.4/mod.ts";
import { html } from "https://deno.land/x/hono@v3.3.4/middleware.ts";
import { typistanImg } from "./typistanImg.tsx";

const app = new Hono();

type Query = {
  score: string;
  title: string;
  csv: string;
};

app.get("/typistan", (c) => {
  const base = new URL(c.req.url).origin
  const { score, title: title_, csv } = c.req.query() as Query;
  if (!score || score === "0") return c.notFound();

  const title = (!title_ || title_ == '') ? null : title_;
  const og = {
    title: `たいぴすたん${title ? ` ${title} ` : ''}で ${score} てん`,
    image: `${base}/typistan.png?score=${score}` + (title ? `&title=${title}` : ''),
    'image:type': 'image/png',
    url: `${base}/typistan?score=${score}&title=${title}&&csv=${csv}`,
    type: "website",
    description: `たいぴすたん で たいぴんぐ ちゃれんじ！`,
  }
  const metas = Object.entries(og).map(([k, v]) => (
    html`<meta property='og:${k}' content='${v}' />
    `
  ));
  const href = `https://typing.kbn.one/#${csv || ""}`
  return c.html(html`
    <html>
      <head>
        <meta charset='utf-8' />
        <title>${og.title}</title>
        ${metas}
      </head>
      <body style='width: 100svw; height: 100svh; '>
        <a href='${href}'>
          <img src='${og.image}' style='height: auto; width: 100%; object-fit: contain; object-position: center;' />
        </a>
        <a href='${href}'>挑戦する</a>
      </body>
    </html>`,
  );
});
app.get("/typistan.png", (c) => {
  const { score, title } = c.req.query() as Query;
  return typistanImg({ score, title });
});

Deno.serve(app.fetch);
