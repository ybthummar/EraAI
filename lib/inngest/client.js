import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "EraAI",
  name: "Career Assistant",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
