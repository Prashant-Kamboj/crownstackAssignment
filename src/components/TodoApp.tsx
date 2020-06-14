import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoInterface } from '../interface/interface';
import './TodoApp.css'


const TodoApp = () => {
    let storedList: string = JSON.parse(JSON.stringify(localStorage.getItem('data')));
    const [todoList, setTodoList] = useState<TodoInterface[]>(storedList ? JSON.parse(storedList) : [])
    const [completed, setCompleted] = useState(0)

    useEffect(()=> {
        let todoListData: TodoInterface[] =  storedList ? JSON.parse(storedList) : [];
        setCompleted(todoListData.filter((todo: TodoInterface) => todo.isCompleted === false).length)
    }, [storedList])

    const handleRemove = (id: string) => {
        let newTodoList: TodoInterface[] = [...todoList]
        newTodoList.find((todo: TodoInterface) => todo.id === id)!.isCompleted = newTodoList.find((todo: TodoInterface) => todo.id === id)!.isCompleted ? false : true
        setTodoList(newTodoList);
        localStorage.setItem( 'data',JSON.stringify(newTodoList))
        setCompleted(newTodoList.filter((todo: TodoInterface) => todo.isCompleted === false).length)
    }

    const handleAddToList =  (listItem: TodoInterface) => {
        let newTodoList: TodoInterface[] = [...todoList];
        newTodoList.push(listItem);
        setTodoList(newTodoList);
        localStorage.setItem( 'data',JSON.stringify(newTodoList))
        setCompleted(newTodoList.filter((todo: TodoInterface) => todo.isCompleted === false).length) 
    }

    

    return  (
        <div className="todo-app-wrapper">
            <div>
    <h3>Total todos remaining: {completed} out of {todoList.length}.</h3>
            </div>
           <TodoForm handleUpdateList={handleAddToList} />
           <TodoList todoList={todoList} handleComplete={handleRemove} />
        </div>
    )
}

export default TodoApp;