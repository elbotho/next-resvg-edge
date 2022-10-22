A minimal prototype of an edge function that takes a SVG and returns a PNG.
This might be useful for creating Open Graph Images on the fly.

It's basically just [resvg-js](https://github.com/yisibl/resvg-js) in an Next.js [Edge API route](https://nextjs.org/docs/api-routes/edge-api-routes).

Heavily inspired by Vercel's own [`@vercel/og`](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) that is not opensource just now and offers HTML->SVG->PNG instead of just SVG->PNG.

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000/api/svg2png?svg=https://gist.githubusercontent.com/christophermanning/4460135/raw/7278f8125f4508e096396b024304daf238e38b97/octocat.svg

There is also a width parameter.
