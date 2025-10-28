import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://zuhaib10.github.io',
	base: '/zk-portfolio',
	integrations: [tailwind()],
});
