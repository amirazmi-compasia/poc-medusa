import Medusa from "@medusajs/js-sdk";
import { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_KEY } from "./env";

let baseUrl = MEDUSA_BACKEND_URL ?? "http://localhost:9000";

export const medusaClient = new Medusa({
  baseUrl,
  publishableKey: MEDUSA_PUBLISHABLE_KEY,
  debug: import.meta.env.MODE === "development",
  auth: {
    type: "jwt",
  },
});
