module.exports = {
  layout: "chapter.liquid",
  eleventyComputed: {
    chapters(data) {
      if (data.collections && data.collectionName) {
        return data.collections[data.collectionName];
      }
      return [];
    },
    title(data) {
      if (data.bookTitle && data.chapterTitle) {
        return `${data.bookTitle}: ${data.chapterTitle}`;
      }
      return data.bookTitle;
    },
  }
};
