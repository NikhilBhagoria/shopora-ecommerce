describe('E-Commerce Shopping Flow', () => {
  beforeEach(() => {
    // This runs before each test. It's a good place to visit the page.
    // The baseUrl from cypress.config.ts is prepended automatically.
    cy.visit('/');
  });

  it('should display products on the home page', () => {
    // Check if the product grid is visible
    cy.get('[data-cy^="product-card-"]').should('have.length.greaterThan', 0);
  });

  it('should navigate to a product detail page when a product is clicked', () => {
    // Find the first product card and click it
    cy.get('[data-cy^="product-card-"]').first().click();

    // Assert that the URL has changed to a product detail page
    cy.url().should('include', '/product/');

    // Assert that the "Add to Cart" button is visible
    cy.get('[data-cy="add-to-cart-button"]').should('be.visible');
  });

  it('should allow a user to add a product to the cart and see the cart count update', () => {
    // The cart count should not exist initially
    cy.get('[data-cy="cart-count"]').should('not.exist');

    // Go to the first product's detail page
    cy.get('[data-cy^="product-card-"]').first().click();

    // Click the "Add to Cart" button
    cy.get('[data-cy="add-to-cart-button"]').click();

    // Now, the cart count in the header should appear and show "1"
    cy.get('[data-cy="cart-count"]').should('be.visible').and('contain.text', '1');
  });

  it('should display items in the cart and allow removal', () => {
    // --- 1. Add item to cart (setup for this test) ---
    cy.get('[data-cy^="product-card-"]').first().click();
    cy.get('[data-cy="add-to-cart-button"]').click();
    cy.get('[data-cy="cart-count"]').should('contain.text', '1');

    // --- 2. Navigate to the cart page ---
    cy.get('a[href="/cart"]').click();
    cy.url().should('include', '/cart');

    // --- 3. Verify the item is in the cart ---
    cy.contains('Your Shopping Cart').should('be.visible');
    cy.get('[data-cy="remove-from-cart-button"]').should('have.length', 1);

    // --- 4. Remove the item from the cart ---
    cy.get('[data-cy="remove-from-cart-button"]').click();

    // --- 5. Verify the cart is now empty ---
    cy.get('[data-cy="remove-from-cart-button"]').should('not.exist');
    cy.contains('Your cart is empty.').should('be.visible');

    // The cart count in the header should also disappear
    cy.get('[data-cy="cart-count"]').should('not.exist');
  });
});