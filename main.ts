import { Hono } from "https://deno.land/x/hono@v3.3.4/mod.ts";
import { html } from "https://deno.land/x/hono@v3.3.4/middleware.ts";
import { typistanImg } from "./typistanImg.tsx";

const app = new Hono();

const Root = 'https://ogp.kbn.one'
type Query = {
  score: string;
  title: string;
  csv: string;
};

app.get("/typistan", (c) => {
  const {score, title, csv} = c.req.query() as Query;
  const og = {
    title: `たいぴすたん ${title} で ${score} てん`,
    image: `${Root}/typistan.png?title=${title}&score=${score}`,
    'image:type': 'image/png',
    url: `${Root}/typistan?title=${title}&score=${score}&csv=${csv}`,
    type: "website",
    description: `たいぴすたん ${title} で ${score}てん`,
  }
  const metas = Object.entries(og).map(([k, v]) => (
    html`
    <meta property='og:${k}' content='${v}' />
    `
  ));
  const href = `https://typing.kbn.one/#${csv || ""}`
  return c.html(html`
    <html>
      <head>
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
  const {score, title} = c.req.query() as Query;
  return typistanImg({ score, title });
});

Deno.serve(app.fetch);
