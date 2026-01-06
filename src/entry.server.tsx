import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About/About";
import Characters from "./routes/Characters/Characters";
import Homepage from "./routes/Homepage/Homepage";
import Music from "./routes/Music/Music";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import Store from "./routes/Store/Store";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
