import { upperFirst, toLower, isNull, isUndefined } from 'lodash-es';

export const formatCurrency = (amount: number, defaultValue: '-' | '' = '-'): string => {
  if (isUndefined(amount) || isNull(amount) || isNaN(amount)) return defaultValue;

  return new Intl.NumberFormat('en-SG', { style: 'currency', currency: 'SGD' }).format(amount);
};

/**
 * Converts a string to title case.
 * @param word - The string to convert.
 * @returns The converted string in title case.
 */
export const toTitleCase = (word: string): string => {
  if (!word) return word;

  return upperFirst(toLower(word));
};
