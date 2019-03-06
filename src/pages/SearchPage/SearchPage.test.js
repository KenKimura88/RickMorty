import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combinedReducers } from '../../store';
import servicePageServices from './services';
import characterDetailPageServices from '../CharacterDetailPage/services';

import SearchPage from './SearchPage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

it('SearchPage tests passed successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <SearchPage />
      </MemoryRouter>
    </Provider>,
    div
  );
});
