A minimal prototype of an edge function that takes a SVG and returns a PNG.
This might be useful for creating Open Graph Images on the fly.

It's basically just [resvg-js](https://github.com/yisibl/resvg-js) in an Next.js [Edge API route](https://nextjs.org/docs/api-routes/edge-api-routes).

Heavily inspired by Vercel's own [`@vercel/og`](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) that is not open source just now and offers HTML->SVG->PNG instead of just SVG->PNG.



## Try it locally

```bash
yarn dev # or npm run dev
```

Open http://localhost:3000/api/svg2png?svg=https://gist.githubusercontent.com/christophermanning/4460135/raw/7278f8125f4508e096396b024304daf238e38b97/octocat.svg

There is also an optional width parameter.


## Caveats

There are solutions to get webfonts and emoji working, but this is not solved in this POC.
