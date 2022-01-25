import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleTaskStatus = this.toggleTaskStatus.bind(this);   
    }


    addTask(task) {
        this.setState(currState => (
            {
                todos: [...currState.todos,task]
            }
        ));
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(todo => (todo.id !== id))
        });
    }

    toggleTaskStatus(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            })
        });
    }

    render() {
        let taskList = this.state.todos.map(todo => (
            <Todo 
                key={todo.id} 
                task = {todo.task} 
                toggleTaskStatus={this.toggleTaskStatus} 
                removeTask={this.removeTask} 
                id={todo.id}
                done={todo.done}
                />
        ));
        let emptyList = <p className='emptyList'>No task available...</p>;
        return (
            <div className='TodoList'>
                    {this.state.todos.length===0 ? emptyList : taskList }
                
                <NewTodoForm addTask = {this.addTask}/>
            </div>
        )
    }
}

export default TodoList;