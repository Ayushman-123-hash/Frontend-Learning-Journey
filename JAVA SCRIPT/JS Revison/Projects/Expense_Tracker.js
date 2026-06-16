let expenses = []

// addExpenses

function addExpenses(title, amount) {
    let expense = {
        id: Math.random(),
        title: title,
        amount: amount
    }
    expenses.push(expense)
}


// showExpenses

function showExpenses() {
    expenses.forEach(function (item) {
        console.log(item.title + " - ₹" + item.amount)
    })
}


// total Nikaal

function totalExpenses() {
    let total = expenses.reduce(function (accumaltor, currentvalue) {
        return accumaltor + currentvalue.amount
    }, 0)
    return total
}


// deleteExpenses

function deleteExpense(id) {
    expenses = expenses.filter(function (item) {
        return item.id !== id
    })
}


// Run

addExpenses("Food", 2000)
addExpenses("Travel", 1800)
addExpenses("Other Expenses", 1000)
console.log(expenses)




showExpenses()


console.log("Total: ", totalExpenses())


deleteExpense(expenses[0].id)


console.log("After Delete:")


showExpenses()