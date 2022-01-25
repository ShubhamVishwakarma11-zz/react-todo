import React, { Component } from 'react';
import './NewTodoForm.css';
import {v4 as uuid} from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleAddTask (evt) {
        evt.preventDefault();
        let newTask = {...this.state,id:uuid(),done:false};
        this.props.addTask(newTask);
        this.setState({task:''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTask} >
                    <input
                        className='NewTodoInput'
                        onChange={this.handleChange}
                        value = {this.state.task}
                        name = 'task'
                        id = 'task'
                        placeholder='Create a new task ...'
                    />
                </form>
            </div>
        )
    }
}

export default NewTodoForm;