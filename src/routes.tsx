import React from 'react';
import { MainPage } from './pages/main';
import { PageTwo } from './pages/two';

export const routes = [
  {
    element: <MainPage />,
    index: true,
  },
  {
    element: <PageTwo />,
    path: '/two',
  },
];
