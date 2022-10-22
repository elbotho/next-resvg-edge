// @ts-ignore
import wasm from "./_index_bg.wasm?module";
import * as resvg from "@resvg/resvg-wasm";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const svgUrl = searchParams.get("svg");
  const width = parseInt(searchParams.get("width") ?? "");

  if (!svgUrl || !svgUrl.endsWith(".svg"))
    return new Response("Please provide a valid URL to an svg file", {
      status: 400,
    });

  await resvg.initWasm(wasm);

  try {
    const svgResponse = await fetch(svgUrl);
    const svgMarkup = await svgResponse.text();

    const intArray = new resvg.Resvg(
      svgMarkup,
      width
        ? {
            fitTo: {
              mode: "width",
              value: width,
            },
          }
        : undefined
    )
      .render()
      .asPng();

    var imageBlob = new Blob([intArray], { type: "image/png" });
    return new Response(imageBlob, {
      headers: { "content-type": "image/png" },
    });
  } catch {
    return new Response("Could not fetch SVG or convert to PNG.", {
      status: 500,
    });
  }
}
