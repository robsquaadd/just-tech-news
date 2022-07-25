module.exports = {
  format_date: function (date) {
    const dateData = new Date(date);
    return `${
      dateData.getMonth() + 1
    }/${dateData.getDate()}/${dateData.getFullYear()}`;
  },
  format_plural: function (word, amount) {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
  format_url: function (url) {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
};
