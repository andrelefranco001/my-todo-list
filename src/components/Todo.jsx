import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = value => {
    editTodo(edit.id, value)
    setEdit({
        id: null,
        value:''
    })
  }

  if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitEdit} />
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row animate__animated animate__fadeIn"}
      key={todo.id} // <-- Agregar una key única para cada elemento
    >

        
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <AiOutlineDelete
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
