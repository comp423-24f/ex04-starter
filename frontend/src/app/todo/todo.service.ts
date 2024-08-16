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
  /**
   * TODO: Create a writable signal named `todoList` that
   * encapsulates a reactive list of to-do items.
   */

  /** Encapsulates the current index to set for items. */
  currentIndex = 0;

  /**
   * Adds a new item to the to-do list.
   * @param item: Item to add to the to-do list.
   */
  addItem() {
    // TODO: Create the new item object and store it in a variable.

    // TODO: Increment the index so that there are no collisions.

    // TODO: Add the item to the end of the existing to-do list.
    //  Hint: Use the signal's `update()` method.

  }

  /**
   * Updates an item by check marking it.
   * @param item: Item to toggle the checkmark status for.
   */
  toggleItemCheckmark() {
    // TODO: Toggle the `completed` of the inputted to-do list item.
  }

  /**
   * Deletes an item from the to-do list.
   * @param item:  Item to delete.
   */
  deleteItem() {
    // TODO: Filter the existing to-do list to exclude the provided item.
    // Hint: What property uniquely identifies the item?
    // Hint 2: Hint: Use the signal's `update()` method.
    // Hint 3: Use the list's `.filter()` method.
  }
}
