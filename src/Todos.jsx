function Todos(props) {
        const todoList = props.todos.length ? (
            props.todos.map(todo => {
                return (
                    <div className="todo" key={todo.id}>
                        <p className="content">{todo.content}</p>
                        <button className="finishTodoButton" onClick={() => {props.deleteTodo(todo.id)}}>Finish</button>
                    </div>
                )
            })
        ) : (
            <p>There is no todo left!</p>
        )

return <div className="todoList">{todoList}</div>
}

export default Todos