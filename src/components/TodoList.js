import React from 'react';
/* importing components */
import Todo from './todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div className='todo-container'>
            <ul className='todo-list'>

                {
                    filteredTodos.map((todo) => {
                        return <Todo
                        key={todo.id}
                        task={todo.task}
                        setTodos={setTodos}
                        todos={todos}
                        id = {todo.id}
                        todo = {todo}
                        />
                    })
                }

            </ul>
        </div>
    )

}

export default TodoList;