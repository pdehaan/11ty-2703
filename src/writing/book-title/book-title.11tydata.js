const path = require("node:path");

module.exports = {
  bookTitle: "Book Title",
  // Set collection name to current directory name.
  // See ../writing.11tydata.js and Eleventy computed `book` data.
  collectionName: path.basename(__dirname),
};
