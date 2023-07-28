export const collectionToURL = (collectionName: string): string => {
  const collectionURLName = collectionName
    .toLocaleLowerCase()
    .replace(/ /g, "-");

  return `/collections/${collectionURLName}`;
};
