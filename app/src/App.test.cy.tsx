import React from 'react'
import App from './App'

describe('<App />', () => {
  it('mounts', () => {
    cy.mount(<App />);
    cy.get('a.App-link').should('have.text', 'Learn React');
    cy.screenshot("main-page");
  })
})