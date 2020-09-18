import { DateTime } from 'luxon';
import React, { ReactElement } from 'react';
import { TATPHeaderOptions } from './types';
import styles from './ATPContainer.module.scss';
import { addWeeksToDay } from './utils';


export const ATPContainer = () => {
    const columnHeaders: TATPHeaderOptions[] = ['Week', 'Mon.', 'Race Name', 'Priority', 'Period', 'Volume'];
    const startingDate = DateTime.local();

    const buildATPRows = (inputDate: DateTime): ReactElement => {
        const dayOfWeek = Number(inputDate.toFormat('c'));
        let daysToAdd = 0;
        if (dayOfWeek !== 1) {
            daysToAdd = 8 - dayOfWeek;
        }
        const firstMonday = inputDate.plus({ days: daysToAdd });
        return (
            <>
                {[...Array(52)].map((_, idx) => {
                    const today = addWeeksToDay(firstMonday, idx);
                    return (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{today.toLocaleString()}</td>
                        </tr>
                    );
                })}
            </>
        )
    }

    return (
        <>
            <table>
                <thead>
                    <tr className={styles.columnHeadRow}>
                        {columnHeaders.map((columnHead) => {
                            return <th key={columnHead}>{columnHead}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {buildATPRows(startingDate)}
                </tbody>

            </table>
        </>
    );
}