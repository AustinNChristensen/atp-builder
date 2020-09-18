import { DateTime } from 'luxon';
import React, { ReactElement } from 'react';
import { addWeeksToDay } from '../utils';
import { PlanRow } from './PlanRow/PlanRow';

interface IPlanCalendar {
    planStartDate: DateTime;
}

export const PlanCalendar = ({ planStartDate }: IPlanCalendar): ReactElement => {
    const dayOfWeek = Number(planStartDate.toFormat('c'));
    let daysToAdd = 0;
    if (dayOfWeek !== 1) {
        daysToAdd = 8 - dayOfWeek;
    }
    const firstMonday = planStartDate.plus({ days: daysToAdd });
    return (
        <tbody>
            {[...Array(52)].map((_, idx) => {
                const baseBlocks = 3;
                const baseBlockDuration = 4;

                const buildBlocks = 2;
                const buildBlockDuration = 4;

                const peakBlocks = 2;
                const peakBlockDuration = 1;

                const weeksToRace = 52 - idx - 1;
                let periodName;
                if (weeksToRace === 0) {
                    periodName = 'Race';
                } else if (weeksToRace <= peakBlocks * peakBlockDuration) {
                    periodName = 'Peak';
                } else if (weeksToRace <= (peakBlocks * peakBlockDuration) + (buildBlocks * buildBlockDuration)) {
                    periodName = 'Build';
                } else if (weeksToRace <= (peakBlocks * peakBlockDuration) + (buildBlocks * buildBlockDuration) + (baseBlocks * baseBlockDuration)) {
                    periodName = 'Base';
                } else {
                    periodName = 'Prep';
                }
                return (
                    <PlanRow
                        week={idx + 1}
                        mondayDate={addWeeksToDay(firstMonday, idx).toLocaleString()}
                        focus=''
                        period={periodName}
                        volume={0}
                        key={idx}
                    />
                );
            })}
        </tbody>
    );
};