import React from 'react';
import { screen } from '@testing-library/react';
import { renderContainer } from '../../../../../testUtils';
import { PlanRow } from '../PlanRow';

describe('PlanRow', () => {
    let week, mondayDate, raceName, focus, period, volume;
    const setupRTL = () => {
        return renderContainer(
            <table>
                <tbody>
                    <PlanRow
                        week={week}
                        mondayDate={mondayDate}
                        raceName={raceName}
                        focus={focus}
                        period={period}
                        volume={volume}
                    />
                </tbody>
            </table>
        );
    };

    beforeEach(() => {
        week = 1;
        mondayDate = '01/01/1990';
        raceName = undefined;
        focus = 'someFocus';
        period = 'Base';
        volume = 450;
    });

    test('Renders Week Number', () => {
        setupRTL();

        expect(screen.getByRole('cell', { name: week.toString() })).toBeInTheDocument();
    });

    test('Renders mondayDate', () => {
        setupRTL();

        expect(screen.getByRole('cell', { name: mondayDate })).toBeInTheDocument();
    });

    test('Renders raceName if available', () => {
        raceName = 'Leadville 100';

        setupRTL();

        expect(screen.getByRole('cell', { name: raceName })).toBeInTheDocument();
    });

    test('Renders focus for week', () => {
        setupRTL();

        expect(screen.getByRole('cell', { name: focus })).toBeInTheDocument();
    });

    test('Renders period name', () => {
        setupRTL();

        expect(screen.getByRole('cell', { name: period })).toBeInTheDocument();
    });

    test('Renders volume', () => {
        setupRTL();

        expect(screen.getByRole('cell', { name: volume.toString() })).toBeInTheDocument();
    });
});