const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  const books = getBooks("./src/writing/");
  for (const book of books) {
    eleventyConfig.addCollection(book.name, function (collectionApi) {
      const pages = collectionApi.getFilteredByGlob(book.glob);
      return pages.sort((a, b) => a.data.chapter - b.data.chapter);
    });
  }
  eleventyConfig.addCollection("writing", function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob("./src/writing/*/index.md");
    return pages;
  });

  return {
    dir: {
      input: "src",
      output: "www",
      layouts: "_layouts",
    },
  };
};

function getBooks(bookDir) {
  return fs.readdirSync(bookDir, { withFileTypes: true })
    .filter(book => book.isDirectory())
    .map(book => ({
      name: book.name,
      glob: path.join(bookDir, book.name, "chapter-*.md"),
    }));
}
