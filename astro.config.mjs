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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Setup Guide",
              items: [
                {
                  label: "Getting Started",
                  slug: "guides/setup/1-getting-started",
                },
                {
                  label: "1. Connecting Twitch",
                  slug: "guides/setup/2-twitch",
                },
                {
                  label: "2. Overlay",
                  slug: "guides/setup/3-overlay",
                },
                {
                  label: "3. VTube Studio",
                  slug: "guides/setup/4-vtube-studio",
                },
                {
                  label: "4. Calibrate",
                  slug: "guides/setup/5-calibrate",
                },
              ],
            },
            {
              label: "Events",
              items: [
                { label: "Introduction", slug: "guides/events/introduction" },
              ],
            },
          ],
        },

        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
