import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "gardener-website",
  deployment: {
    appId: "k30ag74oqzrd9vivj02yy72w",
    autoUpdates: true,
  },
});
