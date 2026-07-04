import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";
import listEventsTool from "./tools/list-events";

export default defineMcp({
  name: "goable-mcp",
  title: "Goable AI",
  version: "0.1.0",
  instructions:
    "Tools for the Goable AI institutional site. Use `echo` to verify connectivity, and `list_conect_ai_events` to fetch the current Conect.AI event editions.",
  tools: [echoTool, listEventsTool],
});
