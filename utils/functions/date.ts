import { format } from 'date-fns';

export { subMonths, addDays, subDays, isDate, startOfWeek, format } from 'date-fns';

export const DATE_FORMAT = 'dd MMM yyyy';
export const DATE_FORMAT_API = 'yyyy-MM-dd';
export const CURRENT_DATE_STRING = new Date().toISOString();

export const formatDate = (date: Date | string, formatString = DATE_FORMAT): string => {
  if (!date) {
    return '-';
  }

  try {
    return format(new Date(date), formatString);
  } catch {
    return date.toString();
  }
};
