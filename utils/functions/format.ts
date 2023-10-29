import { upperFirst, toLower, isNull, isUndefined, isNumber } from 'lodash-es';
import { formatDate, isDate } from '@/utils/functions';

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

/**
 * Returns a string representation of the given value.
 *
 * @param value - The value to convert to a string.
 * @param defaultValue - The default value to return if the value is undefined or null. Defaults to '-'.
 * @returns The string representation of the value.
 */
export const getStringValue = (
  value: string | number | Date | null | undefined,
  defaultValue: '-' | '' = '-',
): string => {
  if (isUndefined(value) || isNull(value) || value == '' || value == 'undefined')
    return defaultValue;
  if (isNumber(value)) return value.toString();
  if (isDate(value)) return formatDate(value);

  return toTitleCase(value.toString());
};

/**
 * The function `maskPassword` takes a password as input and returns a masked version of the password
 * with the first two characters visible and the rest replaced with asterisks.
 * @param {string} password - The `password` parameter is a string that represents the password that
 * needs to be masked.
 * @returns a string with the first two characters of the password followed by asterisks (*) for the
 * remaining characters.
 */
export const maskPassword = (password: string): string => {
  if (password.length < 2) {
    return password;
  }

  const firstTwoChars = password.substring(0, 2);
  const maskedChars = '*'.repeat(password.length - 2);

  return firstTwoChars + maskedChars;
};
