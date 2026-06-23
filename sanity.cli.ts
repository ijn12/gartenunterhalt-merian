import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "gartenunterhalt-merian",
  deployment: {
    appId: "id6pjf3aqpg7rulnz31vhjks",
    autoUpdates: true,
  },
});
