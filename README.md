Shopora - A Modern E-Commerce Web Application
Shopora is a responsive, feature-rich e-commerce front-end application built with modern web technologies. It provides a seamless user experience for browsing products, managing a shopping cart, and viewing detailed product information. The project is built with a strong focus on code quality, responsiveness, and testability.

![alt text](https://img.shields.io/badge/React-19.2.0-blue?logo=react)

![alt text](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)

![alt text](https://img.shields.io/badge/React%20Router-7.x-blue?logo=react-router)

![alt text](https://img.shields.io/badge/Cypress-14.x-green?logo=cypress)

![alt text](https://img.shields.io/badge/license-MIT-blue.svg)

# ✨ Features

* Product Listing & Filtering: Browse a grid of products fetched from a live API. Filter products by category, with the filter state persisted in the URL for easy sharing.
* Dynamic Product Details Page: Click on any product to view its dedicated, dynamically routed page with a detailed description, price, and images.
* Comprehensive Cart Functionality:
  - Add/Remove items from the cart.
  - View the number of items and the total value.
  - Cart state is persisted in localStorage, so it's not lost on page refresh.
* Fully Responsive Design: A mobile-first approach ensures a seamless experience on all devices, from mobile phones to widescreen desktops.
* State Management with Context API: Global state for the shopping cart is managed efficiently using React's Context API.
* End-to-End Testing: Core user flows are covered by E2E tests written with Cypress to ensure application reliability and prevent regressions.
* Modern UI/UX: Clean, professional styling with CSS Modules, subtle animations, and a focus on user experience.

# 📸 Screenshots

## Home Page	

![alt text](/src/docs/screenshot-home.png?raw=true)

## Product Detail Page
![alt text](/src/docs/screenshot-detail.png?raw=true)

## Cart Page

![alt text](/src/docs/screenshot-cart.png?raw=true)


# 🛠️ Tech Stack
* Framework: React JS (v18) with TypeScript
* Routing: React Router DOM (v7)
* State Management: React Context API with Hooks
* Data Fetching: Axios (communicating with FakeStoreAPI)
* Styling: CSS Modules & Global CSS with a modern, responsive design approach.
* End-to-End Testing: Cypress
Linting/Formatting: ESLint & Prettier (configured with Create React App)

***

# 🚀 Getting Started
Follow these instructions to get the project up and running on your local machine for development and testing purposes.
## Prerequisites
Make sure you have the following installed on your system:

  - Node.js (v20 or higher is recommended)
  - npm (Node Package Manager), usually comes with Node.js

## Installation & Setup

1) Clone the repository:

```sh
git clone https://github.com/NikhilBhagoria/shopora-ecommerce.git

cd shopora-ecommerce

```

2) Install the dependencies:

 This command will install all the necessary packages defined in package.json.

```sh
npm install
```

3) Run the development server:

This will start the application on a local development server.

```sh
npm start
```

The application will now be running and accessible at http://localhost:5173. The page will automatically reload if you make changes to the source files.

***

# 🧪 Running Tests
This project uses Cypress for End-to-End (E2E) testing to ensure the core functionalities work as expected.

## Running Tests in Interactive Mode

This is the recommended way to run tests during development. It opens the Cypress Test Runner, which allows you to see the tests run in a real browser and use time-travel debugging.

1. Make sure your development server is running:

```sh
npm start
```

2. In a new terminal window, open Cypress:


```sh
npx cypress open
```

Select "E2E Testing", choose a browser, and then click on a test file (e.g., shopping_flow.cy.ts) to run it.


## Running Tests in Headless Mode

This mode is ideal for CI/CD pipelines or for quickly running all tests from the command line without opening a browser window.

1. Make sure your development server is running:

```sh
npm start
```

2. In a new terminal window, run the tests headlessly:

```sh
npx cypress run
```

# 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.