import parse from "html-react-parser";

export const parseHtmlToReact = (text) => {
  try {
    return parse(text);
  } catch (error) {
    return "";
  }
};
