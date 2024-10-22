import React from 'react'
import { createMemoryRouter } from 'react-router';
import { routes } from './routes';
import { RouterProvider } from 'react-router-dom';

describe('<App />', () => {
  it('Loads main', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.get('h1').should('have.text', "Main page")
    cy.screenshot("main-page");
  })

  it('Navigate to page two', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    cy.mount(<RouterProvider router={router} />);
    cy.contains('button', 'Ir a pagina dos').click();
    cy.get('h1').contains('Segunda pagina').should('be.visible');
    cy.screenshot("page-two");
  })


  describe('Name of the group', () => {
    beforeEach(() => {
      cy.intercept({
        url: '/una-call',
        method: 'POST',
      }).as("apitest")
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
  });


  // it('Check mocked resposne call', () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });
  //   cy.mount(<RouterProvider router={router} /> );
  //   cy.findByRole('button', {name: 'Ir a pagina dos'}).click();
  //   const texto = 'texto de prueba';
  //   cy.findByRole('textbox').type(texto)
  //   cy.screenshot()
  //   cy.findByRole('button', {name: 'Enviar'}).click();
  //   cy.intercept("POST", "/aaa").as("apitest")

  //   cy.wait('@apitest')
  // });

})