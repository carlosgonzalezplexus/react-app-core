import React from 'react'
import { createMemoryRouter } from 'react-router';
import { routes } from '../../routes';
import { RouterProvider } from 'react-router-dom';

import  {i18next} from  './../../i18n'

describe('<MainPage />', () => {
  it('Loads main', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.get('h1').should('have.text', i18next.t('common.title'))
    cy.screenshot("main-page");
  })

  it('Navigate to page two', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.contains('button', 'Navigate').click();
    cy.get('h1').contains('Second page').should('be.visible');
    cy.screenshot("page-two-loads");
  })
})