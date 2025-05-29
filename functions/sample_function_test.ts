import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "@std/assert";
import { stub } from "@std/testing/mock";
import SampleFunction from "./sample_function.ts";

const { createContext } = SlackFunctionTester("sample_function");

Deno.test("Sample function test", async () => {
  // Replaces globalThis.fetch with the mocked copy
  using _fetchStub = stub(
    globalThis,
    "fetch",
    (url: string | URL | Request, options?: RequestInit) => {
      const request = url instanceof Request ? url : new Request(url, options);

      assertEquals(request.method, "POST");
      assertEquals(request.url, "https://slack.com/api/chat.postMessage");
      return Promise.resolve(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
        }),
      );
    },
  );

  const inputs = { message: "Hello, World!", user: "U01234567" };
  const { outputs, error } = await SampleFunction(createContext({ inputs }));
  assertEquals(error, undefined);
  assertEquals(outputs?.message, "Hello, World!");
  assertEquals(outputs?.user, "U01234567");
});
