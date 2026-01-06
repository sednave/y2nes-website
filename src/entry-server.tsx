import { renderToString } from "react-dom/server";
import router from "./router";
import { RouterProvider, StaticRouter } from "react-router";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <RouterProvider router={router} />
    </StaticRouter>
  );
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Y2NES</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/dist/client/main.js"></script>
      </body>
    </html>
  `;
}
