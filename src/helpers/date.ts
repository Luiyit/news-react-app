import { DateTime } from "luxon";

const getDateFromISO = (date: string): DateTime => {
  return DateTime.fromISO(date);
}

export { getDateFromISO }