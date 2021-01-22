import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *    where todo = { id, title, description, priority }
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos);

  /** Called by TodoForm as handleSave
   *  adds a new todo to list */
  function create(newTodo) {
    let newTodoCopy = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, newTodoCopy].map(todo => ({ ...todo })));
  }

  /** Called by EditableTodo in handleSave
   * update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos( todos => todos.map(todo => (todo.id === updatedTodo.id) ? updatedTodo : todo));
  }

  /** Called by EditableTodo in handleDelete
   * delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id).map(todo => ({ ...todo })));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {(todos.length > 0)
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
          {(todos.length > 0)
            ? <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section> : ""}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;
