import { renderToString } from "react-dom/server";
import { useRoutes, StaticRouter } from "react-router";
import routes from "./routes";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>{useRoutes(routes)}</StaticRouter>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="/assets/index.css" />
        <title>Y2NES</title>
        <meta name="description" content="Welcome to Y2NES! You'll find new song releases and other news from Y2NES here." />
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/main.js"></script>
      </body>
    </html>
  `;
}
