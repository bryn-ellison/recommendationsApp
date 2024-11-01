import * as z from "zod";

const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string().default("https://localhost:7000/api"),
    ENABLE_API_MOCKING: z
      .string()
      .refine((s) => s === "true" || s === "false")
      .transform((s) => s === "true")
      .optional(),
    APP_URL: z.string().optional().default("http://localhost:3000"),
    APP_MOCK_API_PORT: z.string().optional().default("8080"),
    SUPABASE_URL: z.string().default("https://oiwwrgokymchhqccitbz.supabase.co"),
    SUPABASE_KEY: z.string().default("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pd3dyZ29reW1jaGhxY2NpdGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTQ0MzEsImV4cCI6MjA0NDgzMDQzMX0.nMHJSyCQkWKG2qei77h3R25HkBPjqJZOfJbKgiTRRf0"),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith("VITE_APP_")) {
      acc[key.replace("VITE_APP_", "")] = value;
    }
    return acc;
  }, {});

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n")}
  `
    );
  }

  return parsedEnv.data;
};

export const env = createEnv();