import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 * State: isEditing(true/false)
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing((isEditing) => !isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove();
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { }

  return (
    <div className="EditableTodo">

      EITHER

      <TodoForm />

                OR

      <div className="mb-3">
        <div className="float-right text-sm-right">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
                    </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
                    </button>
        </div>
        <Todo />
      </div>

    </div>
  );
}

export default EditableTodo;
