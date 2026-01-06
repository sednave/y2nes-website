import type { Handler } from "@netlify/functions";
import { render } from "../../src/entry.server";

export const handler: Handler = async (event) => {
  try {
    const url = event.rawUrl;
    const body = render(url);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body,
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Server Error" };
  }
};
