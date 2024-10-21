import React from 'react'
import App from './App'

describe('<App />', () => {
  it('mounts', () => {
    cy.mount(<App />);
    cy.get('h1').should('have.text', "Main page")
    cy.screenshot("main-page");
  })
})