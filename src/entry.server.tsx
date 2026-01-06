import { renderToString } from "react-dom/server";
import { useRoutes } from "react-router";
import { StaticRouter } from "react-router-dom/server";
import routes from "./routes";

function App() {
  return useRoutes(routes);
}

export function render(url: string) {
  try {
    const html = renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
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
  } catch (error) {
    console.error("SSR render error:", error);
    // Return a minimal fallback HTML that still loads the client bundle
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
          <div id="root"></div>
          <script type="module" src="/main.js"></script>
        </body>
      </html>
    `;
  }
}
