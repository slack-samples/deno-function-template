import { Manifest } from "https://deno.land/x/deno_slack_sdk@2.2.0/mod.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "PCX QV Slack",
  description: "A template for building standalone functions in Slack",
  icon: "assets/default_new_app_icon.png",
  workflows: [],
  functions: [],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "app_mentions:read",
    "channels:history",
    "channels:join",
    "channels:read",
    "channels:write.invites",
    "commands",
    "dnd:read",
    "emoji:read",
    "groups:history",
    "im:history",
    "mpim:history",
    "reactions:read",
    "usergroups:read",
    "users:read",
    "workflow.steps:execute",
    "chat:write",
  ],
});
