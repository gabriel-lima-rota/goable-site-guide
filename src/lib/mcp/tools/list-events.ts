import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_conect_ai_events",
  title: "List Conect.AI events",
  description: "Returns the list of upcoming Goable Conect.AI event editions (Empresários, MED, GOV) with dates and URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { eventData } = await import("@/lib/goable/events");
    const items = Object.values(eventData).map((e) => ({
      key: e.key,
      name: e.name,
      date: e.date,
      location: e.location,
      audience: e.audience,
      url: e.path,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { events: items },
    };
  },
});
