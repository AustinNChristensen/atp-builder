import { DateTime } from 'luxon';
import React, { ReactElement } from 'react';
import styles from './ATPContainer.module.scss';
import { PlanCalendar } from './PlanCalendar/PlanCalendar';
import { TATPHeaderOptions } from './types';

export const ATPContainer = (): ReactElement => {
    const columnHeaders: TATPHeaderOptions[] = ['Week', 'Mon.', 'Race Name', 'Priority', 'Period', 'Volume'];
    const startingDate = DateTime.local();

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
                <PlanCalendar planStartDate={startingDate} />
            </table>
        </>
    );
};