import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../src/app/styles/app-compiled.css";
import "../src/app/styles/fonts.css";

// Load Poppins font from Google Fonts (the app loads it via root.tsx links() which doesn't apply to Storybook)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "var(--color-elevation-surface)" },
        { name: "overlay", value: "var(--color-elevation-surface-overlay)" },
        { name: "raised", value: "var(--color-elevation-surface-raised)" },
        { name: "sunken", value: "var(--color-elevation-surface-sunken)" },
      ],
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    // @ts-ignore
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
        lava: "lava",
        lime: "lime",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
