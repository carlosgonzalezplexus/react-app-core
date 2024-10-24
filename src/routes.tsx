import React, { Children } from 'react';
import { MainPage } from './pages/main';
import { PageTwo } from './pages/two';
import { Layout } from './components/layout';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <PageTwo />,
        path: '/two',
      },
    ]
  },  
];
