import React, {useState, ChangeEvent} from 'react';
import {TodoInterface, TodoFormInterface} from '../interface/interface';
import sortid from 'shortid'


const TodoForm = (props: TodoFormInterface ) => {

    const [listItem, setListItem] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length > 0){
            setListItem(event.target.value);
        }  
    }

    const handleAddToList = () => {
        const listNextItem: TodoInterface = {
            id: sortid.generate(),
            text: listItem,
            isCompleted: false
        }
        setListItem('');
        if(listItem.length > 0){
        props.handleUpdateList(listNextItem);
        }
    }
    return  (
        <div className="todo-form-wrapper">
            <input type="text"
            placeholder="Enter your todo here"
            value={listItem}
            onChange = {handleChange}
            />
            <button
            onClick={handleAddToList}
            >Add</button>
        </div>
    )
}

export default TodoForm