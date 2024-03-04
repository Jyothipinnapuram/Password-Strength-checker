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
