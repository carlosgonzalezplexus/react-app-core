import React from 'react'
import { createMemoryRouter } from 'react-router';
import { routes } from '../../routes';
import { RouterProvider } from 'react-router-dom';

import  {i18next} from  './../../i18n'

describe('<MainPage />', () => {
  it('when main page loads then display content', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.findByRole('heading', {name: i18next.t('main.title')}).should('be.visible')
    cy.screenshot('main/loads');
  })

  it('When click on navigate button Then display page two', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.findByRole('button', {name: i18next.t('main.navigate')}).click()
    cy.findByRole('heading', {name: i18next.t('two.title')}).should('be.visible')
    cy.screenshot('main/navigate-two');
  })
})