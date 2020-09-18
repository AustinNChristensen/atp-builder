import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupMockStore from 'redux-mock-store';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export const renderContainer = (
    ui,
    {
        store = setupMockStore()({}),
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) => {
    const wrappedUI = (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route render={() => ui} />
                </Switch>
            </Router>
        </Provider>
    );

    return {
        ...render(wrappedUI),
        store,
        history
    };
};