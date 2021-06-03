import { useRef } from "react";
import React from 'react';

const Todo = ({task, todos, setTodos, id, todo}) => {

    const thisTodo = useRef('');
    /* Events */
    const deleteHandler = () => {
        /* setTodos(todos.filter( el =>  el.id !== id  )); */
        thisTodo.current.classList.add('fall');
        setTimeout(()=>{setTodos(todos.filter( el =>  el.id !== id  ))},
            900
        )

    }
    const completeHandler = () => {
        console.log(todo);
        setTodos(todos.map( (el) => {
                if(el.id === id){
                    return {
                        ...todo, status: !el.status
                    }
                }
                return el;
            })
        );
    }

    return(
        <div ref={thisTodo} className="todo">
            <li className={`todo-item ${todo.status ? 'completed' : 'uncompleted'} `}>
                {task}
            </li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )

}

export default Todo;