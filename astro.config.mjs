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
            { label: "Setup Guide", slug: "guides/setup" },
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
