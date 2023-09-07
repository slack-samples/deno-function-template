/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateIssue from "./create_issue.ts";

Deno.test("CreateIssue can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateIssue_slack_function",
    title: "Test CreateIssue",
    description: "This is a generated test to test CreateIssue",
  });
  testWorkflow.addStep(CreateIssue, {
    project_id: "test",
    title: "test",
    issue_type: "test",
    confidential: "test",
    gitlab_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A050HLW5TFV#/functions/create_issue");
  assertEquals(actual.inputs, {
    project_id: "test",
    title: "test",
    issue_type: "test",
    confidential: "test",
    gitlab_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateIssue should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateIssue_slack_function",
    title: "Test CreateIssue",
    description: "This is a generated test to test CreateIssue",
  });
  const step = testWorkflow.addStep(CreateIssue, {
    project_id: "test",
    title: "test",
    issue_type: "test",
    confidential: "test",
    gitlab_access_token: "test",
  });
  assertExists(step.outputs.issue_iid);
  assertExists(step.outputs.issue_url);
  assertExists(step.outputs.issue_reference);
  assertExists(step.outputs.title);
  assertExists(step.outputs.description);
  assertExists(step.outputs.issue_type);
  assertExists(step.outputs.milestone);
  assertExists(step.outputs.confidential);
});
