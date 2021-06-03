import React from 'react';

const Todo = ({task, todos, setTodos, id, todo}) => {

    /* Events */
    const deleteHandler = () => {
        setTodos(todos.filter( el =>  el.id !== id  ));
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
        <div className="todo">
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