import { upperFirst, toLower } from 'lodash';

/**
 * Converts a string to title case.
 * @param word - The string to convert.
 * @returns The converted string in title case.
 */
export const toTitleCase = (word: string): string => {
  if (!word) return word;

  return upperFirst(toLower(word));
};
