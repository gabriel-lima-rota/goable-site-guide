import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_conect_ai_events",
  title: "List Conect.AI events",
  description: "Returns the list of upcoming Goable Conect.AI event editions (Empresários, MED, GOV) with dates and URLs.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { events } = await import("@/lib/goable/events");
    const items = Object.values(events).map((e: any) => ({
      slug: e.slug,
      title: e.title,
      date: e.date,
      audience: e.audience,
      url: `/conect-ai/${e.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { events: items },
    };
  },
});
