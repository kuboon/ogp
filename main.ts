import { Hono } from "https://deno.land/x/hono@v3.3.4/mod.ts";
import { html } from "https://deno.land/x/hono@v3.3.4/middleware.ts";
import { typistanImg } from "./typistanImg.tsx";

const app = new Hono();

type Query = {
  score: string;
  title?: string;
  csv?: string;
};
function parseEmptyToUndef(s: string | undefined) {
  if (typeof s != 'string' || s.trim() == '') return undefined;
  return s;
}
function buildQueryStrings(q: Query) {
  return Object.entries(q).filter(([_k, v]) => v).map(([k, v]) => `${k}=${v}`).join('&');
}

app.get("/typistan", (c) => {
  const base = new URL(c.req.url).origin
  const q = c.req.query() as Query;
  const { score } = q;
  if (!(parseInt(score) > 0)) return c.notFound();
  const title = parseEmptyToUndef(q.title);
  const csv = parseEmptyToUndef(q.csv);
  const og = {
    title: `たいぴすたん${title ? ` ${title} ` : ''}で ${score} てん`,
    url: `${base}/typistan?${buildQueryStrings({ score, title, csv })}`,
    type: "website",
    description: `たいぴすたん で たいぴんぐ ちゃれんじ！`,
    image: `${base}/typistan.png?${buildQueryStrings({ score, title })}`,
    'image:type': 'image/png',
  }
  const metas = Object.entries(og).map(([k, v]) => (
    html`<meta property='og:${k}' content='${v}' />
    `
  ));
  const href = `https://typing.kbn.one/#${csv || ""}`
  return c.html(html`
    <!DOCTYPE html>
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
  return typistanImg({ score, title: title || '' });
});

Deno.serve(app.fetch);
