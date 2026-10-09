# # SpendWise – Personal Budget Tracker

## Project Description

SpendWise is a personal budget tracking web application designed to help users monitor their monthly budget and expenses. It displays the total budget, total amount spent, remaining balance, spending categories, and expense records.

Users can add new expenses, view them in a table, and delete expenses. The dashboard automatically updates the totals and displays a warning when spending exceeds the available budget.

## Features

- Displays the total budget, total spent, and remaining balance.
- Stores multiple expenses in a JavaScript array.
- Allows users to add expenses through a form.
- Displays expense records dynamically in a table.
- Allows users to delete expense records.
- Updates spending category cards automatically.
- Displays budget messages using conditional statements.
- Validates expense information before adding it.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

- Variables and data types
- Arrays and objects
- Functions
- Loops
- Conditional statements (`if`, `else if`, and `else`)
- DOM manipulation
- Event listeners
- Form input and validation
- Number conversion using `Number()`
- Array methods such as `push()` and `splice()`
- Console output using `console.log()`

## How Variables and Arrays Are Used

Variables store important budgeting information, while an array stores multiple expense records.

Example:

```javascript
let budget = 50000;

let expenses = [
    {
        name: "Groceries",
        amount: 5500,
        category: "Food",
        date: "2026-09-01"
    }
];
```

Each expense is stored as an object containing its name, amount, category, and date.

## How Functions Are Used

Functions organize the code into reusable sections.

The `calculateTotalSpent()` function loops through the expense array and calculates the total amount spent.

```javascript
function calculateTotalSpent() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}
```

The `updateDashboard()` function calculates the remaining balance and updates the dashboard summary.

## How Loops Are Used

A `for` loop processes the expense array to calculate total spending.

Another loop displays expense records in the HTML table. These loops allow the application to handle multiple expenses without writing separate code for each record.

## How Conditional Statements Are Used

Conditional statements display messages depending on the remaining balance.

```javascript
if (remainingBalance < 0) {
    message.textContent =
        "Warning: You have exceeded your budget!";
} else if (remainingBalance === 0) {
    message.textContent =
        "You have used your entire budget.";
} else {
    message.textContent =
        "You are within your budget. Keep it up!";
}
```

This helps users know whether they are within their budget or have exceeded it.

## How DOM Manipulation Is Used

The Document Object Model (DOM) allows JavaScript to update webpage content dynamically.

SpendWise uses DOM manipulation to:

- Update the total budget, total spending, and remaining balance.
- Display expense records in a table.
- Update spending category cards.
- Display budget warnings.
- Clear the expense form after submission.

The dashboard updates without requiring a full page reload.

## How Event Listeners Are Used

An event listener detects when a user submits the Add Expense form.

The application validates the information, adds the expense to the array, refreshes the dashboard, and clears the form.

Delete buttons also use click event listeners to remove selected expenses and recalculate the totals.

## Input Validation

Before an expense is added, the application checks that the expense name, amount, category, and date are valid.

Invalid entries trigger a message asking the user to enter valid details.

## Technologies Used

- HTML5 – webpage structure
- CSS3 – dashboard styling and layout
- JavaScript – application logic and interactivity
- Git and GitHub – version control and project submission

## Project Files

```text
budget-tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Challenges and Solutions

**Challenge 1: Updating totals after adding expenses**

Solution: Used an expense array and reusable functions to recalculate the totals whenever an expense is added.

**Challenge 2: Keeping the expense table and dashboard synchronized**

Solution: Updated the table, dashboard summary, and category cards after adding or deleting an expense.

**Challenge 3: Monitoring spending against the budget**

Solution: Used conditional statements to display different messages depending on the remaining balance.

## Conclusion

SpendWise demonstrates how JavaScript can be used to create an interactive budget tracking application. By combining arrays, objects, loops, conditional statements, functions, DOM manipulation, and event listeners, the project enables users to manage expense records and monitor their spending more effectively.

**Future improvement:** Add browser storage so that expense records remain available after refreshing or reopening the page.
