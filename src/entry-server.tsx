import { RouterProvider, StaticRouter } from "react-router";
import { renderToPipeableStream } from "react-dom/server";
import router from "./router";

export function render(url: string) {
  const app = (
    <StaticRouter location={url}>
      <RouterProvider router={router} />
    </StaticRouter>
  );

  const html = renderToPipeableStream(app);
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
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
}
