import React from 'react';

const Form = ({ setTodo, todo, setTodos, todos, setFilter }) => {


    const inputHandler = (e) => {
        setTodo(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {task: todo, status:false, id: (Math.random()*1000).toFixed(5) }]);
        setTodo('');

    }

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    return(
        <form>
            <input value={todo} onChange={inputHandler} className='todo-input' type="text" />
            <button disabled={todo.length===0} onClick={submitHandler} className='todo-button' type="submit">
                <i className='fas fa-plus-square'></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )

}

export default Form;