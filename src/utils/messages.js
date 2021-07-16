export const convertNewMessages = (messagesList, newMessages) => {
  const newData = messagesList.map((message) => {
    if (message.date === "Hari ini") {
      return {
        ...message,
        data: [...message.data, { ...newMessages }],
      };
    } else {
      return {
        ...message,
      };
    }
  });
  return newData;
};

export const urlify = (text) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return (
      '<a href="' +
      url +
      '" target="_blank" style="color: #687aef">' +
      url +
      "</a>"
    );
  });
};

export const truncateWords = (sentence, amount, tail) => {
  const words = sentence.split(" ");

  if (amount >= words.length) {
    return sentence;
  }

  const truncated = words.slice(0, amount);
  return `${truncated.join(" ")}${tail}`;
};
