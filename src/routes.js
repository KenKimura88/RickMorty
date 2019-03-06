import React, { lazy } from 'react';
import { DefaultLayout } from './layouts';

const HomePage = lazy(() => import('./pages/HomePage'));
const CharacterDetailPage = lazy(() => import('./pages/CharacterDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

export const routes = [
  {
    path: '/',
    component: () => (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: '/character/:id',
    component: () => (
      <DefaultLayout>
        <CharacterDetailPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/search/:id',
    component: ({ match }) => (
      <DefaultLayout>
        <SearchPage match={match} />
      </DefaultLayout>
    ),
  },
];
