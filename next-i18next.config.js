const path = require("path")

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "cat"],
  },
  react: { useSuspense: true },
  localePath: path.resolve("./public/locales"),
}
