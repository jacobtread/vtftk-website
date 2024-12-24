// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "VTFTK",
      social: {
        github: "https://github.com/jacobtread/vtftk",
      },
      sidebar: [
        {
          label: "Setup Guide",
          autogenerate: { directory: "setup_guide" },
        },

        {
          label: "Guides",
          collapsed: true,
          items: [
            {
              label: "Throwables",
              collapsed: true,
              autogenerate: { directory: "guides/throwables" },
            },
            {
              label: "Sounds",
              collapsed: true,
              autogenerate: { directory: "guides/sounds" },
            },
            {
              label: "Events",
              collapsed: true,
              autogenerate: { directory: "guides/events" },
            },
            {
              label: "Commands",
              collapsed: true,
              autogenerate: { directory: "guides/commands" },
            },
            {
              label: "Scripts",
              collapsed: true,
              autogenerate: { directory: "guides/scripts" },
            },
          ],
        },

        {
          label: "Examples",
          collapsed: true,
          items: [
            {
              label: "Events",
              collapsed: true,
              autogenerate: { directory: "examples/events" },
            },
            {
              label: "Commands",
              collapsed: true,
              autogenerate: { directory: "examples/commands" },
            },
            {
              label: "Scripts",
              collapsed: true,
              autogenerate: { directory: "examples/scripts" },
            },
          ],
        },

        {
          label: "Reference",
          collapsed: true,
          items: [
            {
              label: "Commands",
              collapsed: true,
              autogenerate: { directory: "reference/commands" },
            },
            {
              label: "Scripting",
              collapsed: true,
              autogenerate: { directory: "reference/scripting" },
            },
            {
              label: "Scripts",
              collapsed: true,
              autogenerate: { directory: "reference/scripts" },
            },
            {
              label: "Settings",
              collapsed: true,
              autogenerate: { directory: "reference/settings" },
            },
          ],
        },
      ],
    }),
  ],
});
