import React from 'react';
import { screen } from '@testing-library/react';
import { ATPContainer } from '../ATPContainer';
import { renderContainer } from '../../../testUtils';

describe('ATPContainer', () => {
    const setupRTL = () => {
        return renderContainer(<ATPContainer />);
    };

    describe('Table Headers', () => {
        test('Renders week', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Week' })).toBeInTheDocument();
        });

        test('Renders Mon.', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Mon.' })).toBeInTheDocument();
        });

        test('Renders Race Name', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Race Name' })).toBeInTheDocument();
        });

        test('Renders Priority', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Priority' })).toBeInTheDocument();
        });

        test('Renders Period', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Period' })).toBeInTheDocument();
        });

        test('Renders Volume', () => {
            setupRTL();
            expect(screen.getByRole('columnheader', { name: 'Volume' })).toBeInTheDocument();
        });
    });

    test('Renders 52 rows + Header row', () => {
        setupRTL();
        expect(screen.getAllByRole('row')).toHaveLength(53);
    });
});