import React from 'react'
import { createMemoryRouter } from 'react-router';
import { routes } from '../../routes';
import { RouterProvider } from 'react-router-dom';

describe('<TowPage />', () => {
  beforeEach(() => {
    cy.intercept({
      url: '/una-call',
      method: 'POST',
    }, { fixture: 'sample' }).as("apitest")
  });

  it('Check api call', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.contains('button', 'Ir a pagina dos').click();
    cy.get('h1').contains('Segunda pagina').should('be.visible');
    const texto = 'texto de prueba';
    cy.get('input').type(texto)
    cy.get('button').contains('Enviar').click();
    cy.wait('@apitest').its('request.body').should('eq', JSON.stringify({ message: texto }))
  });


  it('Display response api call', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.contains('button', 'Ir a pagina dos').click();
    cy.get('h1').contains('Segunda pagina').should('be.visible');
    const texto = 'texto de prueba';
    cy.get('input').type(texto)
    cy.get('button').contains('Enviar').click();
    // cy.wait('@apitest').its('response').should('eq', JSON.stringify({ body: {message: texto} }))
    cy.get('div').contains('respuesta')
    cy.screenshot("two/shows-sample-response")
  });
})