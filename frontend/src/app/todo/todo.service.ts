/**
 * The To-Do Service abstracts business logic from the components.
 *
 * @author Ajay Gandecha, Jade Keegan
 * @copyright 2024
 * @license MIT
 */

import { Injectable, WritableSignal, signal } from '@angular/core';

import { ToDoListItem } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /** Encapsulates a reactive list of to-do items. */
  todoList: WritableSignal<ToDoListItem[]> = signal([]);

  /** Encapsulates the current index to set for items. */
  currentIndex = 0;

  /**
   * Adds a new item to the to-do list.
   * @param item: Item to add to the to-do list.
   */
  addItem(title: string) {
    // Create the new item object and store it in a variable.
    const newItem: ToDoListItem = {
      id: this.currentIndex,
      title: title,
      completed: false
    };
    // Increment the index so that there are no collisions.
    this.currentIndex += 1;
    // Add the item to the end of the existing to-do list.
    // Hint: Use the signal's `update()` method.
    this.todoList.update((oldTodoList) => {
      return [...oldTodoList, newItem];
    });
  }

  /**
   * Updates an item by check marking it.
   * @param item: Item to toggle the checkmark status for.
   */
  toggleItemCheckmark(item: ToDoListItem) {
    // Toggle the `completed` of the inputted to-do list item.
    item.completed = !item.completed;
  }

  /**
   * Deletes an item from the to-do list.
   * @param item:  Item to delete.
   */
  deleteItem(item: ToDoListItem) {
    // Filter the existing to-do list to exclude the provided item.
    this.todoList.update((oldTodoList) => {
      return oldTodoList.filter((o) => o.id !== item.id);
    });
  }
}
