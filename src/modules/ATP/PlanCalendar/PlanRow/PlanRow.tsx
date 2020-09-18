import React, { ReactElement } from 'react';

interface IPlanRowProps {
    week: number;
    mondayDate: string;
    raceName?: string;
    focus: string;
    period: string;
    volume: number;
}

export const PlanRow = ({
    week,
    mondayDate,
    raceName,
    focus,
    period,
    volume
}: IPlanRowProps): ReactElement => {
    return (
        <tr>
            <td>{week}</td>
            <td>{mondayDate}</td>
            <td>{raceName}</td>
            <td>{focus}</td>
            <td>{period}</td>
            <td>{volume}</td>
        </tr>
    );
};