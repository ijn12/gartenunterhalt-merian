"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

// Embedded Next.js route lives at /studio; the hosted sanity.studio build
// passes SANITY_STUDIO_BASEPATH=/ so it serves from the root.
const basePath = process.env.SANITY_STUDIO_BASEPATH ?? "/studio";

export default defineConfig({
  name: "gartenunterhalt-merian",
  title: "Gartenunterhalt Merian",
  basePath,
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
});
