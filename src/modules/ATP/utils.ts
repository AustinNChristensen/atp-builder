import { DateTime } from "luxon";

export const addWeeksToDay = (startingDate: DateTime, weeks: number): DateTime => {
    return startingDate.plus({ weeks: weeks });
};