import { Manifest } from "deno-slack-sdk/mod.ts";
import { SampleFunctionDefinition } from "./functions/sample_function.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "deno-function-template",
  description: "A template for building standalone functions in Slack",
  icon: "assets/default_new_app_icon.png",
  functions: [SampleFunctionDefinition],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
  ],
});
