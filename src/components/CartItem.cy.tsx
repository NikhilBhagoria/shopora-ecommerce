import React from 'react'
import CartItem from './CartItem'

describe('<CartItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartItem />)
  })
})