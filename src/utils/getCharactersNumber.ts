export const getCharactersNumber = (url: string): string => {
  if (url) {
    const dataArray = url.split("/");
    return dataArray[dataArray.length - 2];
  } else {
    return "Invalid id";
  }
};
