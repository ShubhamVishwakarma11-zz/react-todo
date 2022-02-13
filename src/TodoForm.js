import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            task: this.props.task
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateTask = this.handleUpdateTask.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleUpdateTask (evt) {
        evt.preventDefault();
        let updatedTask = {...this.state,id:this.props.id,done:false,editing:false};
        this.props.updateTask(updatedTask,this.props.id);
        this.setState({task:''});
    }

    render() {
        return (
            <div className="TodoFormContainer">
                <form onSubmit={this.handleUpdateTask} >
                    <input
                        className='TodoInput'
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

export default TodoForm;