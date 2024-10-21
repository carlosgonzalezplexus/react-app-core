import React from 'react'
import App from './App'
import { MemoryRouter, createMemoryRouter } from 'react-router';
import { routes } from './routes';
import { RouterProvider } from 'react-router-dom';

describe('<App />', () => {
  it('Loads main', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} /> );
    cy.get('h1').should('have.text', "Main page")
    cy.screenshot("main-page");
  })

  it('Navigate to page two', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} /> );
    cy.contains('button', 'Ir a pagina dos').click();
    cy.get('h1').contains('Segunda pagina').should('be.visible');
    cy.screenshot("page-two");
  })

  it('Check api call', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} /> );
    cy.contains('button', 'Ir a pagina dos').click();
    const texto = 'texto de prueba';
    cy.get('input').type(texto)
    cy.contains('button', 'Enviar').click();
    cy.intercept("POST", "/test", {body: {
      TEST: texto
    }}).as("apitest")
    cy.wait('@apitest')
  });

})