
/* ==============================
   SpendWise Interactive Dashboard
============================== */

// 1. Store application data using variables and an array

let budget = 50000;

let expenses = [
    { name: "Groceries", amount: 5500, category: "Food", date: "2026-09-01" },
    { name: "Bus Fare", amount: 3200, category: "Transport", date: "2026-09-02" },
    { name: "House Rent", amount: 15000, category: "Rent", date: "2026-09-03" },
    { name: "Movie", amount: 2000, category: "Entertainment", date: "2026-09-04" },
    { name: "Utilities", amount: 1800, category: "Utilities", date: "2026-09-05" }
];

// 2. Calculate total expenses

function calculateTotalSpent() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 3. Format money in Kenyan shillings

function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE");
}

// 4. Update the dashboard summary and budget message

function updateDashboard() {
    let totalSpent = calculateTotalSpent();
    let remainingBalance = budget - totalSpent;

    document.getElementById("total-budget").textContent =
        formatMoney(budget);

    document.getElementById("total-spent").textContent =
        formatMoney(totalSpent);

    document.getElementById("remaining-balance").textContent =
        formatMoney(remainingBalance);

    // Display a message based on the remaining budget
    let message = document.getElementById("budget-message");

    if (remainingBalance < 0) {
        message.textContent = "Warning: You have exceeded your budget!";
    } else if (remainingBalance === 0) {
        message.textContent = "You have used your entire budget.";
    } else {
        message.textContent = "You are within your budget. Keep it up!";
    }
}

// 5. Display expense records in the table

function displayExpenses() {
    let expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${expenses[i].name}</td>
            <td>${formatMoney(expenses[i].amount)}</td>
            <td>${expenses[i].category}</td>
            <td>${expenses[i].date}</td>
            <td>
                <button type="button" class="delete-expense"
                    data-index="${i}">Delete</button>
            </td>
        `;

        expenseList.appendChild(row);
    }

    // Add an event listener to each Delete button
    let deleteButtons = document.querySelectorAll(".delete-expense");

    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let index = Number(button.dataset.index);

            expenses.splice(index, 1);

            displayExpenses();
            updateDashboard();
            updateCategoryCards();
        });
    });
}

// 6. Update category cards using the expense array

function updateCategoryCards() {
    let cards = document.querySelectorAll(".category-card");

    cards.forEach(function(card) {
        let categoryName = card.querySelector("h3").textContent;
        let categoryTotal = 0;

        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].category === categoryName) {
                categoryTotal += expenses[i].amount;
            }
        }

        let amountElement = card.querySelector(".card-content strong");

        if (amountElement) {
            amountElement.textContent = formatMoney(categoryTotal);
        }
    });
}

// 7. Handle the Add Expense form

let expenseForm = document.getElementById("expense-form");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("expense-name").value.trim();
    let amount = Number(document.getElementById("expense-amount").value);
    let category = document.getElementById("expense-category").value;
    let date = document.getElementById("expense-date").value;

    // Validate user input
    if (name === "" || amount <= 0 || category === "" || date === "") {
        alert("Please enter valid details for your expense.");
        return;
    }

    // Add the expense to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category,
        date: date
    });

    // Refresh the dashboard without reloading the page
    displayExpenses();
    updateDashboard();
    updateCategoryCards();

    // Clear the form
    expenseForm.reset();
});

// 8. Initialize the dashboard when the page loads

displayExpenses();
updateDashboard();
updateCategoryCards();

console.log("SpendWise dashboard is ready!");
