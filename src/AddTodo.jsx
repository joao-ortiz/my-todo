import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {content: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({content: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        let todo = {content: this.state.content, id: Math.random()}
        this.props.addTodo(todo)
        this.setState({content: ''})
    }

    render() {
        return <div className="addTodoContainer">
            <form className="addTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <input type="text" value={this.state.content} onChange={this.handleChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    }
}

export default AddTodo