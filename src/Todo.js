import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
    }


    handleRemoveTask() {
        this.props.removeTask(this.props.id);
    }

    handleToggle() {
        this.props.toggleTaskStatus(this.props.id);
    }

    handleToggleEdit() {
        this.props.toggleEdit(this.props.id);
    }

    render() {
        let taskClass = "Todo-text " + (this.props.done ? "Todo-text-done": "");
        return (
            <div className='Todo'>
                <label className='Todo-checkbox'>
                    <input 
                        type='checkbox' 
                        name='done' 
                        id='done'
                        value={this.props.done} 
                        onChange={this.handleToggle}/>
                </label>
                    
                     
                    {this.props.editing 
                    ? <TodoForm 
                        task={this.props.task} 
                        id={this.props.id}
                        updateTask = {this.props.updateTask} />
                    : <p className = {taskClass}>{this.props.task}</p>}
                    
                    
                    <button onClick={this.handleToggleEdit} className='Todo-btn'>
                        <i className='fas fa-pen'></i>
                    </button>

                    <button onClick={this.handleRemoveTask} className='Todo-btn' > 
                        <i className="fas fa-trash"></i>
                    </button>
                    

  
            </div>
        )
    }
}

export default Todo;