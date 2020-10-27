import React from 'react';

class AddNinja extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name : '', age : '',belt : ''}

        this.handleChange = this.handleChange.bind(this)
        this.addNinja = this.addNinja.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        const stateName = e.target.id
        this.setState({[stateName] : e.target.value})
    }

    addNinja(e) {
        e.preventDefault();
        const ninja = this.state
        ninja.id = Math.random()
        this.props.handleNinjaAdd(ninja)
    }

    render() {return (<div className="addNinja">
        <form onSubmit={this.addNinja}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange}/>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={this.handleChange}/>
            <label htmlFor="belt">Belt:</label>
            <input type="text" id="belt" onChange={this.handleChange}/>
            <button type="submit">Add</button>
        </form>    
    </div>)}
}

export default AddNinja