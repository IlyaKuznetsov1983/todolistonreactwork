import React from "react";
import TodoListItem from "../todoListItem";

const TodoList = ({items, onRemove}) => {
  const elements = items.map(({id, label}) => {
       return <li key={id}>
            <TodoListItem
                label={label}
                onRemove={() => onRemove(id)}
            />
        </li>
    })
    return <ul>
        {elements}
    </ul>
}

export default TodoList