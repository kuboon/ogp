/** @jsx jsx */
/** @jsxFrag  Fragment */

import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { jsx } from 'https://deno.land/x/hono/middleware.ts'
import { ImageResponse } from 'npm:@vercel/og'

const app = new Hono()

app.get('/', (c) => {
    const ogp = c.req.query()
    const metas = Object.entries(ogp).map((k, v)=>{
        <meta property="og:{k}" content="{v}" />
    })
    return c.html(
        <html>
        <head>
            {metas}
        </head>
        <body>
            <pre>{metas}</pre>
        </body>
        </html>
  )
})

serve(app.fetch)
