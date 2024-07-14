# Expense Tracker

## Overview

Expense Tracker is a single-page application designed to help employees report and track their expenses. The app allows users to add new expenses, view past expenses, filter expenses by description, and see total expenses by week for the whole year.

## Features

- **Add New Expense**: Users can report a new expense by entering the date, description, and amount.
- **View Past Expenses**: All reported expenses are displayed in a list.
- **Filter Expenses**: Users can filter expenses by description using a search input.
- **Total Expenses**: View the total expenses dynamically.
- **Modern Design**: The application uses SCSS for a modern and clean design.
- **Persistent Storage**: Data is stored in `localStorage` to persist across sessions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **SCSS**: A CSS preprocessor for more flexible and maintainable styling.
- **localStorage**: For client-side storage of expense data.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Clone the Repository

```sh
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
npm install
npm start


src/
  components/
    ExpenseForm.js      # Component for adding new expenses
    ExpenseList.js      # Component for displaying the list of expenses
    ExpenseItem.js      # Component for displaying an individual expense
    TotalExpenses.js    # Component for displaying total expenses
    util/
        Filter.js           # Component for filtering expenses by description
  styles/
    _variables.scss     # SCSS variables for consistent styling
    main.scss           # Main SCSS file for styling the app
  App.js                # Main App component
  index.js              # Entry point of the application