import React from 'react';
import { DateTime } from 'luxon';
import { screen } from '@testing-library/react';
import { renderContainer } from '../../../../testUtils';
import { PlanCalendar } from '../PlanCalendar';

describe('PlanCalendar', () => {
    let planStartDate;

    const setupRTL = () => {
        return renderContainer(
            <table>
                <PlanCalendar planStartDate={planStartDate} />
            </table>
        );
    };

    beforeEach(() => {
        planStartDate = DateTime.local(1990, 1, 1);
    });

    describe('Calendar start date', () => {
        let firstMonday, sundayBefore;

        beforeEach(() => {
            firstMonday = planStartDate.toLocaleString();
            sundayBefore = DateTime.local(1989, 12, 31);
        });

        test('Will always start with first monday on or after input date', () => {
            setupRTL();

            expect(screen.getByRole('cell', { name: firstMonday })).toBeInTheDocument();
        });

        test('Will never be input date if that day is not a monday', () => {
            planStartDate = sundayBefore;

            setupRTL();

            expect(screen.queryByRole('cell', { name: sundayBefore.toLocaleString() })).not.toBeInTheDocument();
            expect(screen.getByRole('cell', { name: firstMonday })).toBeInTheDocument();
        });
    });

    test('Renders 52 plan rows', () => {
        setupRTL();
        expect(screen.getAllByRole('row')).toHaveLength(52);
    });

    test('Renders 1 Race week per Race passed in', () => {
        setupRTL();
        expect(screen.getAllByRole('cell', { name: 'Race' })).toHaveLength(1);
    });

    test('Renders 3 base blocks of 4 weeks', () => {
        setupRTL();
        expect(screen.getAllByRole('cell', { name: 'Base' })).toHaveLength(12);
    });

    test('Renders 2 base blocks of 4 weeks', () => {
        setupRTL();
        expect(screen.getAllByRole('cell', { name: 'Build' })).toHaveLength(8);
    });

    test('Renders 2 peak blocks of 1 week', () => {
        setupRTL();
        expect(screen.getAllByRole('cell', { name: 'Peak' })).toHaveLength(2);
    });
});