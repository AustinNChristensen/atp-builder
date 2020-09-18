import { addWeeksToDay } from '../utils';
import { DateTime } from 'luxon';

describe('utils', () => {
    test('addWeeksToDay' , () => {
        const inputDate = DateTime.fromMillis(631087200000);
        expect(addWeeksToDay(inputDate, 3)).toEqual(DateTime.fromJSDate(new Date('01/21/1990')));
        expect(addWeeksToDay(inputDate, 12)).toEqual(DateTime.fromJSDate(new Date('03/25/1990')));
    })
});