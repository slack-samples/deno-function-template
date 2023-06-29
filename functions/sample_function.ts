import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in workflows.
 * https://api.slack.com/automation/functions/custom
 */
export const SampleFunctionDefinition = DefineFunction({
  callback_id: "sample_function",
  title: "Sample function",
  description: "A sample function",
  source_file: "functions/sample_function.ts",
  input_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
        description: "Message to send",
      },
      user: {
        type: Schema.slack.types.user_id,
        description: "User to send message to",
      },
    },
    required: ["message", "user"],
  },
  output_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
        description: "Message that was sent",
      },
      user: {
        type: Schema.slack.types.user_id,
        description: "User the message was sent to",
      },
    },
    required: ["message", "user"],
  },
});

/**
 * SlackFunction takes in two arguments: the CustomFunction
 * definition (see above), as well as a function that contains
 * handler logic that's run when the function is executed.
 * https://api.slack.com/automation/functions/custom
 */
export default SlackFunction(
  SampleFunctionDefinition,
  async ({ inputs, client }) => {
    const { message, user } = inputs;

    const formattedMessage = `:wave: ` + `<@${user}>` +
      ` submitted the following message: \n\n>${message}`;

    await client.chat.postMessage({
      channel: user,
      text: formattedMessage,
    });

    // Outputs are made available as variables for use in subsequent functions
    return { outputs: { message, user } };
  },
);
