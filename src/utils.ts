export const BOTTOM_HEIGHT = 50;

export function chunkArray(array: any) {
  const chunkedArray = [];
  const chunkSize = 4;
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunkedArray;
}
