module.exports = {
  plugins: [
    require("@csstools/postcss-global-data")({
      files: ["src/styles/base.css"],
    }),
    require("postcss-custom-media")({}),
  ],
};
