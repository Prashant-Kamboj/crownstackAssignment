import React from 'react';
import { TodoInterface, TodoListInterface } from '../interface/interface';

const TodoList = (props: TodoListInterface) => {

    return (
        <div className="todo-list-wrapper">
            <ul>
                {props.todoList.map((todo: TodoInterface) => (
                    <div key={todo.id} style={{display:'flex'}}>
                    <li key={todo.id} onClick={() => props.handleComplete(todo.id)} style={{textDecoration: `${todo.isCompleted ? 'line-through': 'none'}`, cursor:'pointer'}}>{todo.text}</li> 
                    </div>))}
            </ul>
        </div>
    )
}

export default TodoList