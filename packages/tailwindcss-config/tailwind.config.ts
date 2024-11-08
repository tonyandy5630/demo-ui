// We want each package to be responsible for its own content.
const config = {
  content: ["./app/**/*.tsx"],
  theme: {
    extends: {
      color: {
        white: "#fff",
      },
    },
  },
  plugins: [],
};

export default config;
