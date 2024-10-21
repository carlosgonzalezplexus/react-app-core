import React from 'react'
import App from './App'

describe('<App />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})