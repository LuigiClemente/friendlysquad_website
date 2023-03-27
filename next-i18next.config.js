const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "ar", "it-IT","nl-NL","fr","pt-BR","de-DE"],
    defaultLocale: "de-DE",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};