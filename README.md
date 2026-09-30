# SpendWise – Personal Budget Tracker

## Project Description

SpendWise is a personal budget tracking web application designed to help users monitor their monthly budget and expenses. The application displays the total budget, total amount spent, and remaining balance.

The project uses HTML and CSS to create the dashboard interface and JavaScript to process budgeting information, collect user input, perform calculations, and display results.

## JavaScript Concepts Implemented

The following JavaScript concepts were implemented in this project:

* Variables
* Data types
* User input using `prompt()`
* Number conversion using `Number()`
* Arithmetic calculations
* Functions
* Console output using `console.log()`
* Updating webpage content using the DOM

## How Variables Are Used

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 50000;
let totalSpent = 19800;
let remainingBalance;
```

The `budget` variable stores the user's available monthly budget, while `totalSpent` stores the total amount spent. The `remainingBalance` variable stores the amount left after expenses have been deducted.

## How User Input Is Collected

SpendWise uses the JavaScript `prompt()` function to collect information from the user.

The user is asked to enter:

1. Their monthly budget.
2. Their total expenses.

The input is converted from text into numbers using the `Number()` function so that mathematical calculations can be performed.

Example:

```javascript
let userBudget = prompt("Enter your monthly budget in KSh:");
budget = Number(userBudget);
```

## How Calculations Are Performed

The application calculates the remaining balance by subtracting the total expenses from the total budget.

The calculation is performed using:

```javascript
remainingBalance = budget - totalSpent;
```

For example, if the budget is KSh 50,000 and the total expenses are KSh 19,800:

```text
Remaining Balance = 50,000 - 19,800
Remaining Balance = KSh 30,200
```

## How Functions Organize the Code

A reusable function called `calculateRemainingBalance()` is used to perform the budget calculation.

```javascript
function calculateRemainingBalance(budgetAmount, spentAmount) {
    return budgetAmount - spentAmount;
}
```

The function accepts the budget and total expenses as parameters and returns the remaining balance.

Using a function makes the code easier to organize, understand, and reuse.

## Console Output

The calculated results are displayed in the browser console using `console.log()`.

Example output:

```text
===== SpendWise Budget Summary =====
Total Budget: KSh 50000
Total Spent: KSh 19800
Remaining Balance: KSh 30200
```

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Files

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

SpendWise demonstrates the JavaScript fundamentals covered in this assignment. The application stores budgeting data using variables, collects user input, performs calculations, uses reusable functions, and displays the results both on the webpage and in the browser console.
