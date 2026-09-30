/* ==============================
SpendWise JavaScript
============================== */

// 1. Store application data using variables

let budget = 50000;
let totalSpent = 19800;
let remainingBalance;

// 2. Function to calculate the remaining balance

function calculateRemainingBalance(budgetAmount, spentAmount) {
return budgetAmount - spentAmount;
}

// 3. Collect user input using prompt()

let userBudget = prompt("Enter your monthly budget in KSh:");

if (userBudget !== null && userBudget !== "") {
budget = Number(userBudget);
}

let userExpenses = prompt("Enter your total expenses in KSh:");

if (userExpenses !== null && userExpenses !== "") {
totalSpent = Number(userExpenses);
}

// 4. Perform the budget calculation

remainingBalance = calculateRemainingBalance(budget, totalSpent);

// 5. Display the results in the browser console

console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KSh " + budget);
console.log("Total Spent: KSh " + totalSpent);
console.log("Remaining Balance: KSh " + remainingBalance);

// 6. Display the calculated values on the webpage

document.getElementById("total-budget").textContent =
"KSh " + budget.toLocaleString();

document.getElementById("total-spent").textContent =
"KSh " + totalSpent.toLocaleString();

document.getElementById("remaining-balance").textContent =
"KSh " + remainingBalance.toLocaleString();
