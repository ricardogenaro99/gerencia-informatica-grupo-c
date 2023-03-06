import parse from "html-react-parser";

export const parseHtmlToReact = (text) => {
  try {
    return parse(text);
  } catch (error) {
    return "";
  }
};

export const generateUniqueId = (parts = 1) => {
  const stringArr = [];
  for (let i = 0; i < parts; i++) {
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join("-");
};
