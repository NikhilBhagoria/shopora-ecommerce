import React from 'react'
import ProductCard from './ProductCard'

describe('<ProductCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductCard />)
  })
})