// We want each package to be responsible for its own content.
const config = {
  content: [
    // for example pages
    "./app/**/*.tsx",
    // for example pages components
    "./components/**/*.{jsx,js,ts,tsx}",
    // for ui components
    "../../packages/ui/src/**/**/*.tsx",
  ],
  theme: {
    extends: {},
  },
  plugins: [],
};

export default config;
