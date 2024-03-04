# coding-Raja-Technologies-internship
internship in coding Raja technologies on python

Task 1:-
Develop a command-line to-do list application that allows users to manage tasks.

code:-
import json
from datetime import datetime, timedelta
TASKS_FILE = "tasks.json"
def load_tasks():
    try:
        with open(TASKS_FILE, 'r') as file:
            tasks = json.load(file)
    except FileNotFoundError:
        tasks = []
    return tasks
def save_tasks(tasks):
    with open(TASKS_FILE, 'w') as file:
        json.dump(tasks, file, indent=2)
def add_task(tasks):
    task_description = input("Enter task description: ")
    priority = input("Enter priority (high/medium/low): ").lower()
    due_date_str = input("Enter due date (YYYY-MM-DD): ")

    try:
        due_date = datetime.strptime(due_date_str, '%Y-%m-%d').date()
    except ValueError:
        print("Invalid date format. Task not added.")
        return

    new_task = {
        'description': task_description,
        'priority': priority,
        'due_date': due_date.strftime('%Y-%m-%d'),
        'completed': False
    }

    tasks.append(new_task)
    save_tasks(tasks)
    print("Task added successfully.")
def remove_task(tasks):
    print_tasks(tasks)
    task_index = input("Enter the index of the task to remove: ")

    try:
        task_index = int(task_index)
        removed_task = tasks.pop(task_index)
        save_tasks(tasks)
        print(f"Task removed: {removed_task['description']}")
    except (ValueError, IndexError):
        print("Invalid index. Task not removed.")
def mark_completed(tasks):
    print_tasks(tasks)
    task_index = input("Enter the index of the task to mark as completed: ")

    try:
        task_index = int(task_index)
        tasks[task_index]['completed'] = True
        save_tasks(tasks)
        print("Task marked as completed.")
    except (ValueError, IndexError):
        print("Invalid index. Task not marked as completed.")
def print_tasks(tasks):
    if not tasks:
        print("No tasks found.")
    else:
        for i, task in enumerate(tasks):
            status = "[ ]" if not task['completed'] else "[X]"
            print(f"{i}. {status} {task['description']} (Priority: {task['priority']}, Due Date: {task['due_date']})")
def main():
    tasks = load_tasks()

    while True:
        print("\n==== To-Do List ====")
        print("1. Add Task")
        print("2. Remove Task")
        print("3. Mark Task as Completed")
        print("4. View Tasks")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ")
        if choice == '1':
            add_task(tasks)
        elif choice == '2':
            remove_task(tasks)
        elif choice == '3':
            mark_completed(tasks)
        elif choice == '4':
            print_tasks(tasks)
        elif choice == '5':
            print("Exiting the application. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")
if __name__ == "__main__":
    main()

Task 2
Certainly! Below is a simple console-based budget tracker in Python with the specified features. The application uses a text file to store transactions for data persistence.

```python
import json
from datetime import datetime

# File to store transactions
TRANSACTIONS_FILE = "transactions.json"

# Function to load transactions from the file
def load_transactions():
    try:
        with open(TRANSACTIONS_FILE, 'r') as file:
            transactions = json.load(file)
    except FileNotFoundError:
        transactions = {'income': 0, 'expenses': []}
    return transactions

# Function to save transactions to the file
def save_transactions(transactions):
    with open(TRANSACTIONS_FILE, 'w') as file:
        json.dump(transactions, file, indent=2)

# Function to record an income transaction
def record_income(transactions):
    amount = float(input("Enter the income amount: "))
    category = input("Enter a category for income: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    transactions['income'] += amount
    transactions['expenses'].append({'type': 'income', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Income recorded successfully.")

# Function to record an expense transaction
def record_expense(transactions):
    amount = float(input("Enter the expense amount: "))
    category = input("Enter a category for expense: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    transactions['income'] -= amount
    transactions['expenses'].append({'type': 'expense', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Expense recorded successfully.")

# Function to calculate and display the budget
def display_budget(transactions):
    remaining_budget = transactions['income']
    for expense in transactions['expenses']:
        remaining_budget -= expense['amount']

    print("\n==== Budget Tracker ====")
    print(f"Income: ${transactions['income']:.2f}")
    print(f"Expenses: ${sum(expense['amount'] for expense in transactions['expenses']):.2f}")
    print(f"Remaining Budget: ${remaining_budget:.2f}")

# Function to analyze and display spending trends
def display_expense_analysis(transactions):
    categories = {}
    for expense in transactions['expenses']:
        category = expense['category']
        categories[category] = categories.get(category, 0) + expense['amount']

    if not categories:
        print("No expenses recorded for analysis.")
    else:
        print("\n==== Expense Analysis ====")
        for category, amount in categories.items():
            print(f"{category}: ${amount:.2f}")

# Main function
def main():
    transactions = load_transactions()

    while True:
        print("\n==== Budget Tracker Menu ====")
        print("1. Record Income")
        print("2. Record Expense")
        print("3. Display Budget")
        print("4. Display Expense Analysis")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            record_income(transactions)
        elif choice == '2':
            record_expense(transactions)
        elif choice == '3':
            display_budget(transactions)
        elif choice == '4':
            display_expense_analysis(transactions)
        elif choice == '5':
            print("Exiting the budget tracker. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

Task 2
Certainly! Below is a simple console-based budget tracker in Python with the specified features. The application uses a text file to store transactions for data persistence.

```python
import json
from datetime import datetime

# File to store transactions
TRANSACTIONS_FILE = "transactions.json"

# Function to load transactions from the file
def load_transactions():
    try:
        with open(TRANSACTIONS_FILE, 'r') as file:
            transactions = json.load(file)
    except FileNotFoundError:
        transactions = {'income': 0, 'expenses': []}
    return transactions

# Function to save transactions to the file
def save_transactions(transactions):
    with open(TRANSACTIONS_FILE, 'w') as file:
        json.dump(transactions, file, indent=2)

# Function to record an income transaction
def record_income(transactions):
    amount = float(input("Enter the income amount: "))
    category = input("Enter a category for income: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    transactions['income'] += amount
    transactions['expenses'].append({'type': 'income', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Income recorded successfully.")

# Function to record an expense transaction
def record_expense(transactions):
    amount = float(input("Enter the expense amount: "))
    category = input("Enter a category for expense: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    transactions['income'] -= amount
    transactions['expenses'].append({'type': 'expense', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Expense recorded successfully.")

# Function to calculate and display the budget
def display_budget(transactions):
    remaining_budget = transactions['income']
    for expense in transactions['expenses']:
        remaining_budget -= expense['amount']

    print("\n==== Budget Tracker ====")
    print(f"Income: ${transactions['income']:.2f}")
    print(f"Expenses: ${sum(expense['amount'] for expense in transactions['expenses']):.2f}")
    print(f"Remaining Budget: ${remaining_budget:.2f}")

# Function to analyze and display spending trends
def display_expense_analysis(transactions):
    categories = {}
    for expense in transactions['expenses']:
        category = expense['category']
        categories[category] = categories.get(category, 0) + expense['amount']

    if not categories:
        print("No expenses recorded for analysis.")
    else:
        print("\n==== Expense Analysis ====")
        for category, amount in categories.items():
            print(f"{category}: ${amount:.2f}")

# Main function
def main():
    transactions = load_transactions()

    while True:
        print("\n==== Budget Tracker Menu ====")
        print("1. Record Income")
        print("2. Record Expense")
        print("3. Display Budget")
        print("4. Display Expense Analysis")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            record_income(transactions)
        elif choice == '2':
            record_expense(transactions)
        elif choice == '3':
            display_budget(transactions)
        elif choice == '4':
            display_expense_analysis(transactions)
        elif choice == '5':
            print("Exiting the budget tracker. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")
