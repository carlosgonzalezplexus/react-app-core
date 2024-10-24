import React from 'react'
import { createMemoryRouter } from 'react-router';
import { routes } from '../../routes';
import { RouterProvider } from 'react-router-dom';
import i18next from 'i18next';

describe('<TowPage />', () => {
  beforeEach(() => {
    cy.intercept({
      url: '/Security/AuthenticationPortal',
      method: 'POST',
    }, { fixture: 'sample' }).as("apitest")
  });

  it('Check api call', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.findByRole('button', {name: i18next.t('main.navigate') }).click()
    cy.findByRole('heading', {name: i18next.t('two.title')}).should('be.visible')
    
    const texto = 'texto de prueba';
    cy.findByPlaceholderText(i18next.t('two.input')).type(texto)
    cy.findByRole('button', {name:  i18next.t('two.send')}).click()
    cy.wait('@apitest').its('request.body').should('eql', { Password: 'any', UserName: texto })
  });


  it('Display response api call', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.findByRole('button', {name: i18next.t('main.navigate')  }).click()
    cy.findByRole('heading', {name: i18next.t('two.title') }).should('be.visible')

    const texto = 'texto de prueba';
    cy.findByPlaceholderText( i18next.t('two.input')).type(texto)
    cy.findByRole('button', {name: i18next.t('two.send')}).click()
    cy.findByText('role1').should('be.visible')
    cy.screenshot("two/display-response")
  });
})